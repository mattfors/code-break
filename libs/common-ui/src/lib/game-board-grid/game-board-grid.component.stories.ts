import { Meta } from '@storybook/angular';
import { GameBoardGridComponent } from './game-board-grid.component';

export default {
  title: 'GameBoardGridComponent',
  component: GameBoardGridComponent,
} as Meta<GameBoardGridComponent>;

export const Primary = {
  render: (args: GameBoardGridComponent) => ({
    props: args,
  }),
  args: {
    rowData: [
      {results: ['exact', 'partial', 'partial', 'none', 'none', 'none'], codes: [0,1,2,3,4,5]},
      {results: ['partial', 'partial', 'partial', 'none', 'none', 'none'], codes: [5,4,3,2,1,0]}
    ],
    config: {rows: 5, columns: 6},
  },
};
