import { Meta } from '@storybook/angular';
import { CodeAttemptResultViewComponent } from './code-attempt-result-view.component';

export default {
  title: 'CodeAttemptResultViewComponent',
  component: CodeAttemptResultViewComponent,
  tags: ['autodocs']
} as Meta<CodeAttemptResultViewComponent>;

export const Primary = {
  render: (args: CodeAttemptResultViewComponent) => ({
    props: args,
  }),
  args: {
    results: ['none', 'none', 'none', 'none'],
  },
};

export const PartiallyCompleted = {
  render: (args: CodeAttemptResultViewComponent) => ({
    props: args,
  }),
  args: {
    results: ['exact', 'partial', 'none', 'none'],
  },
};

export const Completed = {
  render: (args: CodeAttemptResultViewComponent) => ({
    props: args,
  }),
  args: {
    results: ['exact', 'exact', 'exact', 'exact'],
  },
};
