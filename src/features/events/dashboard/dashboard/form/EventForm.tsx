import { Card, Stack, Heading, Field, Button, Input, Flex } from '@chakra-ui/react'

type Props ={
    setFormOpen: (value: boolean) => void;
}

export default function EventForm({setFormOpen}: Props) {
  return (
    <Stack>
    <Card.Root>
        <Card.Body>
             <Card.Header>
                      <Heading size="md"> Create Event</Heading>
                    </Card.Header>
                    <Field.Root style={{marginBottom: 16}}>
                        <Input placeholder='Event title' />
                    </Field.Root>
                    <Field.Root style={{marginBottom: 16}}>
                        <Input placeholder='Category' />
                    </Field.Root>
                    <Field.Root style={{marginBottom: 16}}>
                        <Input placeholder='Description' />
                    </Field.Root>
                    <Field.Root style={{marginBottom: 16}}>
                        <Input placeholder='City' />
                    </Field.Root>
                    <Field.Root style={{marginBottom: 16}}>
                        <Input placeholder='Venue' />
                    </Field.Root>
                    <Field.Root style={{marginBottom: 16}}>
                        <Input placeholder='Date' />
                    </Field.Root>
                    <Flex justifyContent='right'>
                        <Button onClick={() => setFormOpen(false)} style={{marginTop: 12}} float='right'>Cancel</Button>
                        <Button bg='green' style={{marginLeft: 5, marginTop: 12,}} float='right' type='submit'>Submit</Button>
                    </Flex>
        </Card.Body>
    </Card.Root>
    </Stack>
  )
}
