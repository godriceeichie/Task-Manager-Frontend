import React, { useState } from 'react';
import { AiOutlineCheck } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx"
import { PasswordInput, Progress, Text, Popover, Box } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { signUpSchema } from '../../schema';

function PasswordRequirement({ meets, label }: { meets: boolean; label: string }) {
  return (
    <Text
      color={meets ? 'teal' : 'red'}
      sx={{ display: 'flex', alignItems: 'center' }}
      mt={7}
      size="sm"
    >
      {meets ? <AiOutlineCheck size="0.9rem" /> : <RxCross1 size="0.9rem" />} <Box ml={10}>{label}</Box>
    </Text>
  );
}


const requirements = [
  { re: /[0-9]/, label: 'Includes number' },
  { re: /[a-z]/, label: 'Includes lowercase letter' },
  { re: /[A-Z]/, label: 'Includes uppercase letter' },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: 'Includes special symbol' },
];

function getStrength(password: string) {
  let multiplier = password.length > 5 ? 0 : 1;

  requirements.forEach((requirement) => {
    if (!requirement.re.test(password)) {
      multiplier += 1;
    }
  });

  return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 10);
}

function PasswordBox({ signUpForm }) {
  const [popoverOpened, setPopoverOpened] = useState(false);
  const [passwordValue, setPasswordValue] = useState('');
  const checks = requirements.map((requirement, index) => (
    <PasswordRequirement key={index} label={requirement.label} meets={requirement.re.test(passwordValue)} />
  ));

  const strength = getStrength(passwordValue);
  const color = strength === 100 ? 'teal' : strength > 50 ? 'yellow' : 'red';

  //to validate the password box
  const passwordForm = useForm({
    validate: zodResolver(signUpSchema),
    initialValues: {
      password: ""
    }
  })
  return (
    <Box mx="auto">
      <Popover opened={popoverOpened} position="bottom" width="target" transitionProps={{ transition: 'pop' }}>
        <Popover.Target>
          <div
            onFocusCapture={() => setPopoverOpened(true)}
            onBlurCapture={() => setPopoverOpened(false)}
          >
            <PasswordInput
              label="Your password"
              placeholder="Your password"
              value={passwordValue}
              onChange={(newValue) => {
                setPasswordValue(newValue.target.value)
                signUpForm.setFieldValue("password", newValue.target.value)
                signUpForm.setFieldError("password", signUpForm.errors.password)
              }}
              name='password'
              radius={"lg"}
              {...signUpForm.getInputProps("password")}
              
            />
          </div>
        </Popover.Target>
        <Popover.Dropdown>
          <Progress color={color} value={strength} size={5} mb="xs" />
          <PasswordRequirement label="Includes at least 6 characters" meets={passwordValue.length > 5} />
          {checks}
        </Popover.Dropdown>
      </Popover>
    </Box>
  );
}

export default PasswordBox