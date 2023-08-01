import { Meta, StoryObj } from "@storybook/react";
import { useState, useCallback } from "react";

import { Modal } from "./Modal";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Button, ButtonTheme } from "../Button/Button";

const meta = {
  title: "shared/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [ThemeDecorator(Theme.LIGHT)],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

const ModalWithHooks = () => {
  const [isAuthModal, setAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setAuthModal((prev) => !prev);
  }, []);

  return (
    <>
      <Button onClick={onToggleModal} theme={ButtonTheme.OUTLINE}>
        Open Modal
      </Button>

      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        <span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Reprehenderit tempora aspernatur temporibus exercitationem praesentium
          non voluptatum. Ducimus omnis ipsam ut!
        </span>
      </Modal>
    </>
  );
};

export const Primary: Story = {
  render: () => <ModalWithHooks />,
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  render: () => <ModalWithHooks />,
};
