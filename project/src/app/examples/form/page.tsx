'use client'

import { useState } from 'react';
import { Checkbox, Chip, CloseButton, ColorInput, ColorPicker,
  FileInput, Group, Input,
  PinInput, PasswordInput,
  NativeSelect, Radio, Rating,
  SegmentedControl, Slider, Stack, Switch,
  Text, Textarea, TextInput, Tooltip
} from '@mantine/core';
import { IconAt } from '@tabler/icons-react';


import FooterDefault from "../../../components/footers/FooterDefault";
import HeaderDefault from "../../../components/headers/HeaderDefault";



export default function ExampleFormPage() {

  const [valueColorPicker, onChangeColorPicker] = useState('rgba(47, 119, 150, 0.7)');
  const [valueClearableInput, setValueClearableInput] = useState('Clear me');


  return (
    <>
      <HeaderDefault />

      <Checkbox
        defaultChecked
        label="I agree to sell my privacy"
      />

      <Tooltip label="Chip tooltip" refProp="rootRef">
        <Chip
          defaultChecked
        >Awesome chip</Chip>
      </Tooltip>

      <Chip.Group>
        <Group justify="center">
          <Chip value="1">Single chip</Chip>
          <Chip value="2">Can be selected</Chip>
          <Chip value="3">At a time</Chip>
        </Group>
      </Chip.Group>

      <ColorInput
        label="Choose a color"
        description="Input description"
        placeholder="Input placeholder"
      />

      <>
        <ColorPicker format="rgba" value={valueColorPicker} onChange={onChangeColorPicker} />
        <Text>{valueColorPicker}</Text>
      </>


      <FileInput
        label="Input label"
        description="Input description"
        placeholder="Input placeholder"
      />

      <>
        <Input placeholder="Your email" leftSection={<IconAt size={16} />} />
        <Input
          placeholder="Clearable input"
          value={valueClearableInput}
          onChange={(event) => setValueClearableInput(event.currentTarget.value)}
          rightSectionPointerEvents="all"
          mt="md"
          rightSection={
            <CloseButton
              aria-label="Clear input"
              onClick={() => setValueClearableInput('')}
              style={{ display: valueClearableInput ? undefined : 'none' }}
            />
          }
        />
      </>

      <NativeSelect label="Input label" description="Input description" data={['React', 'Angular', 'Vue']} />;

      <PasswordInput
        label="Input label"
        description="Input description"
        placeholder="Input placeholder"
      />

      <PinInput />

      <Stack>
        <Radio checked={false} onChange={() => {}} label="Default radio" />
        <Radio checked onChange={() => {}} label="Checked radio" />
        <Radio checked variant="outline" onChange={() => {}} label="Outline checked radio" />
        <Radio disabled label="Disabled radio" />
        <Radio disabled checked onChange={() => {}} label="Disabled checked radio" />
      </Stack>

      <Rating defaultValue={2} />

      <SegmentedControl data={['React', 'Angular', 'Vue']} />;

      <Slider
        color="blue"
        defaultValue={40}
        marks={[
          { value: 20, label: '20%' },
          { value: 50, label: '50%' },
          { value: 80, label: '80%' },
        ]}
      />

      <Switch
        defaultChecked
        label="I agree to sell my privacy"
      />

      <Textarea
        label="Input label"
        description="Input description"
        placeholder="Input placeholder"
      />

      <TextInput
        label="Input label"
        description="Input description"
        placeholder="Input placeholder"
      />

      <FooterDefault />
    </>
  );
}
