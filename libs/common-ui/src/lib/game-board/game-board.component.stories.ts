import { Meta, StoryObj } from '@storybook/angular';
import { GameBoardComponent } from './game-board.component';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

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
    config: { columns: 4, rows: 6, numberOfColors: 6 },
  },
};

export const AddingAttempt: StoryObj = {
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates the code attempt input and submit functionality.'
      },
    },
  },
  args: {
    rowData: [
      {results: ['exact', 'partial', 'partial', 'none'], codes: [0,1,2,3]},
      {results: ['partial', 'partial', 'partial', 'none'], codes: [5,4,3,2]}
    ],
    config: { columns: 4, rows: 4, numberOfColors: 6 },
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const colorPicker= within(canvas.getByTestId('game-board-color-picker'));
    const colorPickerButtons = colorPicker.getAllByRole('button');
    const submitAttempt = canvas.getByTestId('game-board-submit-attempt');

    await expect(submitAttempt).toBeDisabled()
    await userEvent.click(colorPickerButtons[0]);
    await userEvent.click(colorPickerButtons[1]);
    await userEvent.click(colorPickerButtons[2]);
    await userEvent.click(colorPickerButtons[3]);
    await userEvent.click(colorPickerButtons[4]);

    await expect(submitAttempt).not.toBeDisabled();
    await userEvent.click(submitAttempt);

    await expect(submitAttempt).toBeDisabled()

    await expect(args['codeSubmit']).toHaveBeenCalled();

  },
};

