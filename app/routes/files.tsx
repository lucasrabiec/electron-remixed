import { Flex, Heading, Textarea, Text, Button } from "@chakra-ui/react";
import { ActionFunction, json } from "@remix-run/node";
import { Form, Link, useActionData } from "@remix-run/react";

import { app, dialog } from '~/server/electron.server';
import { fs, fsPromise } from "~/server/fs.server";

const badRequest = (data: any) =>
  json(data, { status: 400 });

export const action: ActionFunction = async ({request}) => {
  const formData = await request.formData();
  const { _action, ...values } = Object.fromEntries(formData);

  if (_action === 'save') {
    const saveDialogReturnValue = await dialog.showSaveDialog({ defaultPath: `${app.getPath('desktop')}/example.txt` })

    if (!saveDialogReturnValue.filePath) {
      return json('Canceled', { status: 200 });
    }

    const fileContent = values.fileContent
    if (
      typeof fileContent !== "string"
    ) {
      return badRequest({
        formError: `Form not submitted correctly.`,
      });
    }
    fs.writeFile(saveDialogReturnValue.filePath, fileContent, () => {});
    // also handle canceled event
    return json('Saved', { status: 200 });
  }

  if (_action === 'load') {
    const openDialogReturnValue = await dialog.showOpenDialog({ properties: ['openFile'], filters: [{name: 'Text', extensions: ['txt']}]})
    if (!openDialogReturnValue.filePaths.length) {
      return json('Canceled', { status: 200 });
    }
    const fileLoadedContent = await fsPromise.readFile(openDialogReturnValue.filePaths[0], { encoding: 'utf8'})
    return json({fileLoadedContent}, { status: 200 });
  }
}

export default function FilesRoute() {
  const actionData = useActionData();

  return (
    <Flex p={4} gap={4} h='100vh' flexDir='column'>
      <Link to='/'><Heading>FILES</Heading></Link>
      <Form method='post'>
        <Text>Data:</Text>
        <Textarea name='fileContent' w='100%' h={400} defaultValue={actionData?.fileLoadedContent}/>
        <Flex justify='space-evenly' mt={4}>
          <Button colorScheme={'orange'} type='submit' name='_action' value='load'>LOAD</Button>
          <Button colorScheme={'orange'} type='submit' name='_action' value='save'>SAVE</Button>
        </Flex>
      </Form>
    </Flex>
  )
}