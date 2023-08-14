import { PropsWithChildren, memo, useCallback } from "react";

import { Button, ButtonTheme } from "../Button/Button";
import { classNames } from "shared/lib/classNames/classNames";

import CopyIcon from "shared/assets/icons/copy-20-20.svg";

import cls from "./Code.module.scss";

interface CodeProps {
  className?: string;
  text: string;
}

export const Code = memo(
  ({ className, text }: PropsWithChildren<CodeProps>) => {
    const onCopy = useCallback(() => {
      navigator.clipboard.writeText(text);
    }, [text]);
    return (
      <div className={cls.codeWrapper}>
        <pre className={classNames(cls.Code, {}, [className])}>
          <Button
            onClick={onCopy}
            className={cls.copyBtn}
            theme={ButtonTheme.CLEAR}
          >
            <CopyIcon className={cls.copyIcon} />
          </Button>
          <code>{text}</code>
        </pre>
      </div>
    );
  },
);