import { CustomDrawerProps } from '@/components/Drawer/Drawer';
import { ListItem, UnorderedList } from '@chakra-ui/react';

export const workHistoryData: Array<CustomDrawerProps> = [
  {
    title: 'Full Stack Developer Intern',
    subtitle: 'Airble Aviation Inc.',
    duration: 'Jan 2023 - Dec 2023',
    logo: '/images/airble.png',
    children: (
      <UnorderedList mt={4}>
        <ListItem>
          Integrate CDP (Customer Data Platform) to the product, enhance user retention and optimized audience&apos;s
          profile.
        </ListItem>
        <ListItem>
          Build and maintain the data analytics data pipeline and standardized the integration across the product.
        </ListItem>
        <ListItem>
          Created a comprehensive document outlining SDK specifications and the implementation of the marketplace
          platform and analytics products.
        </ListItem>
      </UnorderedList>
    ),
  },
  {
    title: 'Software Developer Intern',
    subtitle: 'Benevity Inc.',
    duration: 'May 2022 - Aug 2022',
    logo: '/images/benevity.png',
    children: (
      <UnorderedList mt={4} width={'100%'}>
        <ListItem>
          Worked on a feature enabled clients of Benevity worldwide to prioritize and organize content quickly resulting
          in an increase in interaction and efficiency by 50%.
        </ListItem>
        <ListItem>
          Familiarize with Kanban and Agile methodology and learn to prioritize each story with Jira for issue tracking.
        </ListItem>
        <ListItem>
          Collaborated & coordinated with personnel from different departments to create an extensive guide for future
          interns at Benevity.
        </ListItem>
      </UnorderedList>
    ),
  },
];
