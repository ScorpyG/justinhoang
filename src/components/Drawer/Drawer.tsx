import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';
import { Box, Collapse, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { useState } from 'react';

export interface CustomDrawerProps {
  title: string;
  subtitle?: string;
  duration?: string;
  logo?: string;
  children: React.ReactNode;
}

export default function Drawer({ title, subtitle, duration, logo, children }: CustomDrawerProps) {
  const [open, setOpen] = useState(false);

  return (
    <Box
      width={['340px', '420px', '640px', '720px']}
      padding={6}
      border={'4px'}
      borderRadius={'2xl'}
      // ---------------------------
      cursor={'pointer'}
      userSelect={'none'}
      onClick={() => setOpen(!open)}
    >
      <Flex justifyContent={'space-evenly'} alignItems={'center'} gap={8} flexDirection={['column', 'column', 'row']}>
        {logo && (
          <Image
            src={logo}
            alt={`company ${title} logo`}
            priority
            width={120}
            height={120}
            style={{ backgroundColor: '#FFF', borderRadius: 10 }}
          />
        )}
        <Box>
          <Heading as={'h4'} size={'lg'}>
            {title}
          </Heading>
          <Heading as={'h6'} size={'md'} py={2}>
            {subtitle}
          </Heading>
          <Text fontSize={'md'}>{duration}</Text>
        </Box>

        <Box>{open ? <TriangleUpIcon boxSize={[6, 8]} /> : <TriangleDownIcon boxSize={[6, 8]} />}</Box>
      </Flex>
      <Collapse in={open} animateOpacity>
        <Box minW={'320px'}>{children}</Box>
      </Collapse>
    </Box>
  );
}
