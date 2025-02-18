import React from 'react'
import { Image } from '@chakra-ui/react'
import { Button, Container } from '@chakra-ui/react'
import {
    // MenuContent,
    // MenuItem,
    MenuRoot,
    MenuTrigger,
    // MenuItemCommand
  } from "@/components/ui/menu"

  type Props = {
    setFormOpen: (value: boolean) => void;
  }

export default function NavBar({setFormOpen}: Props) {
  return (
    <MenuRoot>
      <Container w='100%' p="3" colorPalette='cyan'>
    <MenuTrigger asChild>
      <Button style={{marginRight: '0.5em'}} variant="solid" size="sm" >
        <Image src='../public/logo.png' w='18px' h='18px'></Image>
        Re-vents
      </Button>
    </MenuTrigger>
    <MenuTrigger asChild>
      <Button style={{marginRight: '0.5em'}} variant="solid" size="sm">
        Events
      </Button>
    </MenuTrigger>
    <MenuTrigger asChild>
      <Button colorPalette='green' variant="solid" size="sm" onClick={() => setFormOpen(true)}>
        Create event
      </Button>
    </MenuTrigger>
    <MenuTrigger asChild float="right">
    <Button variant="solid" size="sm" style={{marginLeft: '0.5em'}}>
        Register
      </Button>
    </MenuTrigger>
    <MenuTrigger asChild float='right'>
      <Button variant="solid" size="sm">
        Login
      </Button>
    </MenuTrigger>
    </Container>
  </MenuRoot>
  )
}
