"use client";

import { useState } from "react";
import {
  Checkbox,
  Chip,
  CloseButton,
  ColorInput,
  ColorPicker,
  Container,
  FileInput,
  Group,
  Input,
  NativeSelect,
  PinInput,
  Paper,
  PaperProps,
  PasswordInput,
  Radio,
  Rating,
  SegmentedControl,
  Slider,
  Stack,
  Switch,
  Text,
  Textarea,
  TextInput,
  Title,
  Tooltip,
  Fieldset,
  Divider,
  Autocomplete,
  MultiSelect,
  InputBase,
  Pill,
  TagsInput,
} from "@mantine/core";
import { IconAt } from "@tabler/icons-react";

import FooterDefault from "../../../components/footers/FooterDefault";
import HeaderDefault from "../../../components/headers/HeaderDefault";

import classes from "./ExampleFormPage.module.css";

export default function ExampleFormPage(props: PaperProps) {
  const [valueColorPicker, onChangeColorPicker] = useState(
    "rgba(47, 119, 150, 0.7)"
  );
  const [valueClearableInput, setValueClearableInput] = useState("Clear me");

  const pills = Array(10)
    .fill(0)
    .map((_, index) => (
      <Pill key={index} withRemoveButton>
        Pill #{index}
      </Pill>
    ));

  return (
    <>
      <HeaderDefault />

      <Container size={640} my={40} mt={40}>
        <Title ta="center" className={classes.title}>
          Form Elements
        </Title>
        <Fieldset legend="Choices">
          <Checkbox defaultChecked label="I agree to sell my privacy" />

          <Divider label="Chip with tooltip" labelPosition="center" my="lg" />
          <Tooltip label="This is my chip tooltip" refProp="rootRef">
            <Chip defaultChecked>Awesome chip with tooltip</Chip>
          </Tooltip>

          <Divider label="Switch" labelPosition="center" my="lg" />
          <Switch defaultChecked label="I agree to sell my privacy" />

          <Divider label="Radio chip" labelPosition="center" my="lg" />
          <Chip.Group>
            <Group justify="center">
              <Chip value="1">Single chip</Chip>
              <Chip value="2">Can be selected</Chip>
              <Chip value="3">At a time</Chip>
            </Group>
          </Chip.Group>

          <Divider label="Radio stack" labelPosition="center" my="lg" />
          <Stack>
            <Radio checked={false} onChange={() => {}} label="Default radio" />
            <Radio checked onChange={() => {}} label="Checked radio" />
            <Radio
              checked
              variant="outline"
              onChange={() => {}}
              label="Outline checked radio"
            />
            <Radio disabled label="Disabled radio" />
            <Radio
              disabled
              checked
              onChange={() => {}}
              label="Disabled checked radio"
            />
          </Stack>

          <Divider label="Segment" labelPosition="center" my="lg" />
          <SegmentedControl data={["React", "Angular", "Vue"]} />

          <Divider label="Dropdown" labelPosition="center" my="lg" />
          <NativeSelect
            label="Dropdown label"
            description="Dropdown description"
            data={["React", "Angular", "Vue"]}
          />

          <Divider label="Rate me" labelPosition="center" my="lg" />
          <Rating defaultValue={2} />

          <Divider label="Slide me!" labelPosition="center" my="lg" />
          <Slider
            color="blue"
            defaultValue={40}
            marks={[
              { value: 20, label: "20%" },
              { value: 50, label: "50%" },
              { value: 80, label: "80%" },
            ]}
          />
        </Fieldset>
        <Fieldset legend="Colors" mt={40}>
          <ColorInput
            label="Choose a color"
            description="Input description"
            placeholder="Input placeholder"
          />

          <Divider label="Color Picker" labelPosition="center" my="lg" />

          <Paper>
            <ColorPicker
              format="rgba"
              value={valueColorPicker}
              onChange={onChangeColorPicker}
            />
            <Text>{valueColorPicker}</Text>
          </Paper>
        </Fieldset>
        <Fieldset legend="Text redaction" mt={40}>
          <TextInput
            label="Email"
            placeholder="Your email"
            description="Email long description"
            leftSection={<IconAt size={16} />}
          />

          <Divider
            label="Text with clearance button"
            labelPosition="center"
            my="lg"
          />
          <Input
            placeholder="Clearable input"
            value={valueClearableInput}
            onChange={(event) =>
              setValueClearableInput(event.currentTarget.value)
            }
            rightSectionPointerEvents="all"
            mt="md"
            rightSection={
              <CloseButton
                aria-label="Clear input"
                onClick={() => setValueClearableInput("")}
                style={{ display: valueClearableInput ? undefined : "none" }}
              />
            }
          />

          <Divider label="Password" labelPosition="center" my="lg" />
          <PasswordInput
            label="Password label"
            description="Password long description"
            placeholder="Password placeholder"
          />

          <Divider label="PIN number" labelPosition="center" my="lg" />
          <PinInput />

          <Divider label="Textarea " labelPosition="center" my="lg" />
          <Textarea
            label="Input label"
            description="Input description"
            placeholder="Input placeholder"
          />
        </Fieldset>
        <Fieldset legend="File Uploads" mt={40}>
          <FileInput
            label="Input label"
            description="Input description"
            placeholder="Input placeholder"
          />

          <Divider label="Multiple files " labelPosition="center" my="lg" />
          <FileInput label="Upload files" placeholder="Upload files" multiple />
        </Fieldset>
        <Fieldset legend="Complex form elements">
          <Autocomplete
            label="Your favorite library"
            placeholder="Pick value or enter anything"
            data={[
              {
                group: "Frontend",
                items: ["React", "Angular", "Vue", "Svelte"],
              },
              {
                group: "Backend",
                items: ["Express", "Django"],
              },
            ]}
          />

          <Divider
            label="Combobox - Multiselect"
            labelPosition="center"
            my="lg"
          />
          <MultiSelect
            label="Your favorite libraries"
            placeholder="Pick value"
            data={["React", "Angular", "Vue", "Svelte"]}
            searchable
            nothingFoundMessage="No results found..."
            maxValues={3}
            hidePickedOptions
          />

          <Divider label="Pills" labelPosition="center" my="lg" />
          <InputBase component="div" multiline>
            <Pill.Group>{pills}</Pill.Group>
          </InputBase>
          <Divider label="Tags Input" labelPosition="center" my="lg" />
          <TagsInput
            label="Press Enter to submit a tag"
            placeholder="Enter tag"
          />
        </Fieldset>
      </Container>

      <FooterDefault />
    </>
  );
}
