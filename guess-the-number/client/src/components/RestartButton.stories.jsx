import React from 'react';
import RestartButton from './RestartButton';

export default {
    title: 'Game/RestartButton',
    component: RestartButton,
    argTypes: {
        label: { control: 'text', defaultValue: 'Скинути гру' },
        onClick: { action: 'clicked' },
        disabled: { control: 'boolean' }
    }
};

const TemplateRestart = (args) => <RestartButton {...args} />;

export const Default = TemplateRestart.bind({});
Default.args = { label: 'Скинути гру' };

export const Disabled = TemplateRestart.bind({});
Disabled.args = { label: 'Скинути гру', disabled: true };

export const CustomLabel = TemplateRestart.bind({});
CustomLabel.args = { label: 'Почати знову' };