import { Meta } from '@storybook/angular';
import { GameBoardComponent } from './game-board.component';

export default {
  title: 'GameBoardComponent',
  component: GameBoardComponent,
} as Meta<GameBoardComponent>;

export const Primary = {
  render: (args: GameBoardComponent) => ({
    props: args,
  }),
  args: {
    rowData: [
      {results: ['exact', 'partial', 'partial', 'none'], codes: [0,1,2,3]},
      {results: ['partial', 'partial', 'partial', 'none'], codes: [5,4,3,2]}
    ],
    config: { columns: 4, rows: 10, numberOfColors: 6 },
  },
};
