import { Button, Center, Icon, Input, useToast } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { HiLocationMarker } from "react-icons/hi";

const Navbar = () => {

    const [city, setCity] = useState("");
    const dispatch = useDispatch();
    const toast = useToast();

    const handleChange = () => {
        console.log("Input button clicked")
    }

    const handleLocationData = () => {
        console.log("Location button clicked")
    }

    return (
        <div className='flex flex-wrap min-h-fit bg-[#303030] justify-center gap-3'>
            <Center className='p-2.5'>
                <Input
                    value={city}
                    borderRadius={'15px 0px 0px 15px'}
                    bg={'white'}
                    placeholder='City'
                    onChange={(e) => setCity(e.target.value)}
                />
                <Button
                    onClick={handleChange}
                    borderRadius={'0px 15px 15px 0px'}
                    color={'white'}
                    bg={'#00BFA5'}
                    _hover={{ 'bg': "#3e3b51" }}
                >
                    Search
                </Button>
            </Center>
            <Center className='p-2.5'>
                <Button
                    onClick={handleLocationData}
                    bg={'#00BFA5'}
                    _hover={{ 'bg': "#3e3b51" }}
                    color={'white'}
                    w={'100%'}
                    borderRadius={'15px'}
                    leftIcon={<Icon w={'30px'} h={'30px'} as={HiLocationMarker} />}

                >
                    Your Location Weather
                </Button>
            </Center>
        </div>
    )
}

export default Navbar;