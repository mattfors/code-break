import { Meta } from '@storybook/angular';
import { CodeAttemptViewComponent } from './code-attempt-view.component';

export default {
  title: 'CodeAttemptViewComponent',
  component: CodeAttemptViewComponent,
} as Meta<CodeAttemptViewComponent>;

export const Primary = {
  render: (args: CodeAttemptViewComponent) => ({
    props: args,
  }),
  args: {
    codes: [0,1,2,3,4,5]
  },
};

export const Selection = {
  render: (args: CodeAttemptViewComponent) => ({
    props: args,
  }),
  args: {
    codes: [0,1,2,3,4,5],
    selectedColumn: 3
  },
};
