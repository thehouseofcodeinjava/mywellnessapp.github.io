import React from 'react';
import { ChakraProvider, Box, Text, Image, Stack, Link, Button } from '@chakra-ui/react';
import { SettingsIcon, EmailIcon, PhoneIcon, InfoOutlineIcon } from '@chakra-ui/icons';

function EvidenceBasedOutcomes() {
    return (
        <ChakraProvider>
            <Box p={2} >
                <Text fontSize="2xl" fontWeight="bold" textAlign="center" my={4}>
                    Evidence-based outcomes
                </Text>
                <Stack direction="row" spacing={2} align="center" >
                    {/* Card 1 */}
                    <Image src="https://images.ctfassets.net/v3n26e09qg2r/34ejqyJ3S7t79L445hkOD0/cc1c3139d8af47e5fcdce4c82e85d921/Group_38333.svg?fm=&w=384&q=75" alt="Blue Circle Icon" height="270px"  style={{ marginLeft: '50px' }} />
                    <Image src="https://images.ctfassets.net/v3n26e09qg2r/1ukDRMA47NzsQyrfxAJ9u9/d305f9bdecff9f0b108e38471b36085b/Group_38334__2_.svg?fm=&w=384&q=75" alt="Blue Circle Icon" height="270px"  style={{ marginLeft: '50px' }} />
                    <Image src="https://images.ctfassets.net/v3n26e09qg2r/2s52EdVd5YQ8W9bnlzm2gI/d1f55fee5333b9a6f87b85a0d0612202/Group_38335.svg?fm=&w=384&q=75" alt="Blue Circle Icon" height="270px"  style={{ marginLeft: '50px' }} />
                    <Image src="https://images.ctfassets.net/v3n26e09qg2r/3cWectkdc3JxHmY7LCwwRg/d844dde85d44c1f636f33da28eec7737/Group_38336.svg?fm=&w=384&q=75" alt="Blue Circle Icon" height="270px"  style={{ marginLeft: '50px' }}/ >   
                </Stack>
                <Text fontSize="sm" mt={4} textAlign="center">
                    *Statistics apply to members who engaged in coaching or clinical care
                </Text>
              
            </Box>
        </ChakraProvider>
    );
}

export default EvidenceBasedOutcomes;
