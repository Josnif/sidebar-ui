import type { Meta } from '@storybook/react';

import Sidebar from './Sidebar';

// const meta: Meta<typeof Sidebar> = {
//   title: 'Sidebar',
//   component: Sidebar,
//   parameters: {
//     layout: 'fullscreen',
//   },
// };

const meta = {
  title: 'Example/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Sidebar>;

export default meta;