import React from 'react';
import ResultMessage from './ResultMessage';

export default {
    title: 'Game/ResultMessage',
    component: ResultMessage,
    argTypes: {
        message: { control: 'text', defaultValue: 'Повідомлення' },
        type: { control: 'radio', options: ['success', 'error'] },
        attempts: { control: 'number' }
    }
};

const Template = (args) => <ResultMessage {...args} />;

export const Success = Template.bind({});
Success.args = {
    message: 'Ви вгадали число за 5 спроб!',
    type: 'success',
    attempts: 5
};

export const Error = Template.bind({});
Error.args = {
    message: 'Спробуйте більше число.',
    type: 'error'
};

export const Custom = Template.bind({});
Custom.args = {
    message: 'Ваше повідомлення тут...',
    type: 'success',
    attempts: 3
};