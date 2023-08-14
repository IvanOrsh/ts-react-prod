import type { Meta, StoryObj } from "@storybook/react";

import ArticleDetailsPage from "./ArticleDetailsPage";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import {
  ArticleBlockType,
  ArticleType,
} from "entities/Article/model/types/article";

const meta = {
  title: "page/ArticleDetailsPage",
  component: ArticleDetailsPage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({
      articleDetails: {
        data: {
          id: "1",
          title: "Javascript news",
          subtitle: "Что нового в JS за 2022 год?",
          img: "https://imagedelivery.net/5MYSbk45M80qAwecrlKzdQ/38a9cafe-c53e-47f2-f431-428120462000/public",
          views: 1022,
          createdAt: "26.02.2022",
          type: [ArticleType.IT],
          blocks: [
            {
              id: "1",
              type: ArticleBlockType.TEXT,
              title: "Заголовок этого блока",
              paragraphs: [
                "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
                "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
                "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:",
              ],
            },
            {
              id: "4",
              type: ArticleBlockType.CODE,

              code: `
              type Curried<A extends any[], R> = 
                <L extends TupleSplit<A, number>['init']>(...args: L) =>
                  0 extends L['length'] ? never :
                  0 extends TupleSplit<A, L['length']>['rest']['length'] ? R :
                  Curried<TupleSplit<A,L['length']>['rest'], R>;
              
              declare function curry<A extends any[], R>(
                f: (...args: A)=>R): Curried<A, R>;
              
              function add(x: number, y: number) {
                return x + y;
              }
              const curriedAdd = curry(add);
              
              const addTwo = curriedAdd(2); // Curried<[number], number>
              const three = addTwo(1); // number
              const four = curriedAdd(2,2); // number
              const willBeAnError = curriedAdd(); // never
                  `,
            },
            {
              id: "5",
              type: ArticleBlockType.TEXT,
              title: "Заголовок этого блока",
              paragraphs: [
                "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
                "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:",
              ],
            },
            {
              id: "2",
              type: ArticleBlockType.IMAGE,
              src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
              title: "Рисунок 1 - скриншот сайта",
            },
            {
              id: "3",
              type: ArticleBlockType.CODE,
              code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
            },
            {
              id: "7",
              type: ArticleBlockType.TEXT,
              title: "Заголовок этого блока",
              paragraphs: [
                "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
                "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:",
              ],
            },
            {
              id: "8",
              type: ArticleBlockType.IMAGE,
              src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
              title: "Рисунок 1 - скриншот сайта",
            },
            {
              id: "9",
              type: ArticleBlockType.TEXT,
              title: "Заголовок этого блока",
              paragraphs: [
                "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
              ],
            },
          ],
        },
      },
    }),
  ],
} satisfies Meta<typeof ArticleDetailsPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
