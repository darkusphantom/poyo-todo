import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input, Link, useDisclosure } from "@chakra-ui/react"
import { Fragment, useRef } from "react"

function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef() as any

    return (
        <Fragment>
            <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
                Open
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Menu</DrawerHeader>

                    <DrawerBody>
                        <Link href='https://chakra-ui.com' isExternal>Lista de Hábitos</Link>
                        {/* <Input placeholder='Type here...' /> */}
                    </DrawerBody>

                    {/* <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='blue'>Save</Button>
                    </DrawerFooter> */}
                </DrawerContent>
            </Drawer>
        </Fragment>
    )
}

export { DrawerExample }