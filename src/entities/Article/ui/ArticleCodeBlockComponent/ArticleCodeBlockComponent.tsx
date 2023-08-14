import { memo } from "react";

import { Code } from "shared/ui/Code/Code";
import { ArticleCodeBlock } from "../../model/types/article";
import { classNames } from "shared/lib/classNames/classNames";

interface ArticleCodeBlockComponentProps {
  className?: string;
  block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo(
  ({ className, block }: ArticleCodeBlockComponentProps) => {
    return (
      <div className={classNames("", {}, [className])}>
        <Code text={block.code} />
      </div>
    );
  },
);
