export const mockArticle = {
  path: "Poisk-v-telegraph-03-24",
  url: "https://telegra.ph/Poisk-v-telegraph-03-24",
  title: "Поиск в telegra.ph",
  description:
    "Нашли страницу telegra.ph и хотели бы не потерять её? Добавьте страницу в бота и Вы всегда сможете к ней вернуться, а так же  искать содержание по Вашим и другим страницам. Не теряйте важную информацию!",
  author_name: "@findgbot",
  author_url: "http://t.me/findgbot",
  content: [
    {
      tag: "aside",
      children: [
        "Нашли страницу telegra.ph и хотели бы не потерять её? Добавьте страницу в бота и Вы всегда сможете к ней вернуться, а так же  искать содержание по Вашим и другим страницам. Не теряйте важную информацию!",
      ],
    },
    {
      tag: "blockquote",
      children: [
        {
          tag: "em",
          children: [
            "Если Вы хотите помочь пользователю запомнить Вашу страницу - разместите на на ней ссылку вида: ",
          ],
        },
        {
          tag: "a",
          attrs: {
            href: "https://t.me/findgbot?start=http://telegra.ph/Poisk-v-telegraph-03-24",
            target: "_blank",
          },
          children: [
            "https://t.me/findgbot?start=http://telegra.ph/Poisk-v-telegraph-03-24",
          ],
        },
      ],
    },
    {
      tag: "h3",
      attrs: {
        id: "Команды-бота-@findgbot:",
      },
      children: [
        "Команды бота ",
        {
          tag: "a",
          attrs: {
            href: "http://t.me/findgbot",
            target: "_blank",
          },
          children: ["@findgbot"],
        },
        ":",
      ],
    },
    {
      tag: "aside",
      children: [
        {
          tag: "strong",
          children: ["/find /findall"],
        },
      ],
    },
    {
      tag: "p",
      children: [
        {
          tag: "strong",
          children: ["/find - Поиск страниц среди добавленных Вами."],
        },
      ],
    },
    {
      tag: "p",
      children: [
        {
          tag: "strong",
          children: ["/findall - Поиск среди всех добавленных страниц."],
        },
      ],
    },
    {
      tag: "p",
      children: [
        {
          tag: "em",
          children: ["Пример: /find политика"],
        },
      ],
    },
    {
      tag: "p",
      children: [
        {
          tag: "em",
          children: [
            "По-умолчанию включен морфологический поиск, т.е. учитываются разные формы слова. ",
          ],
        },
      ],
    },
    {
      tag: "p",
      children: [
        {
          tag: "em",
          children: [
            'Если Вы хотите найти слова в указанной форме - отправьте в кавычках, например: /find "политика мирового господства"',
          ],
        },
      ],
    },
    {
      tag: "p",
      children: [
        {
          tag: "em",
          children: [
            'Если требуется включить морфологический поиск только по одному слову - поставьте перед ним тильду, например: /find "политика ~мировой господства"',
          ],
        },
      ],
    },
    {
      tag: "p",
      children: [
        {
          tag: "em",
          children: [
            'Поддерживаются логические операции: OR, AND, NOT, например: /find "(политика AND мирового) AND NOT господства"',
          ],
        },
      ],
    },
    {
      tag: "aside",
      children: [
        {
          tag: "strong",
          children: ["@findgbot inline mode"],
        },
      ],
    },
    {
      tag: "p",
      children: [
        {
          tag: "strong",
          children: [
            "@findgbot - Использование встроенного режима в других чатах.",
          ],
        },
      ],
    },
    {
      tag: "p",
      children: [
        {
          tag: "em",
          children: ["Пример: @findgbot привет"],
        },
      ],
    },
    {
      tag: "p",
      children: [
        {
          tag: "em",
          children: [
            'Появится результат поиска "привет" в добавленных Вами страницах в любом другом доступном чате. ',
          ],
        },
      ],
    },
    {
      tag: "p",
      children: [
        {
          tag: "em",
          children: [
            "Если в Вашем индексе ничего не найдено, то будет выполнен поиск по общему индексу. ",
          ],
        },
      ],
    },
    {
      tag: "p",
      children: [
        {
          tag: "em",
          children: [
            "Это удобно когда Вы хотите поделиться страницей, но ссылки на нее у Вас под рукой нет.",
          ],
        },
      ],
    },
    {
      tag: "aside",
      children: [
        {
          tag: "strong",
          children: ["/add "],
        },
      ],
    },
    {
      tag: "p",
      children: [
        {
          tag: "strong",
          children: ["/add - Довабить страницу в Ваш индекс."],
        },
      ],
    },
    {
      tag: "p",
      children: [
        {
          tag: "em",
          children: ["Пример: /add "],
        },
        {
          tag: "a",
          attrs: {
            href: "/Poisk-v-telegraph-03-24",
          },
          children: [
            {
              tag: "em",
              children: ["https://telegra.ph/Poisk-v-telegraph-03-24"],
            },
          ],
        },
        {
          tag: "em",
          children: [
            ' - Добавляет страницу в Ваш индекс. Вы сможете найти эту страницу по словам из её содержания командой /find или используя встроенный режим "@findgbot найти эту страницу"',
          ],
        },
      ],
    },
    {
      tag: "aside",
      children: [
        {
          tag: "strong",
          children: ["/del"],
        },
      ],
    },
    {
      tag: "p",
      children: [
        {
          tag: "strong",
          children: ["/del - Удаление страницы из Вашего индекса."],
        },
      ],
    },
    {
      tag: "p",
      children: [
        {
          tag: "em",
          children: ["Пример: /del "],
        },
        {
          tag: "a",
          attrs: {
            href: "/Poisk-v-telegraph-03-24",
          },
          children: [
            {
              tag: "em",
              children: ["https://telegra.ph/Poisk-v-telegraph-03-24"],
            },
          ],
        },
        {
          tag: "em",
          children: [
            ' - Удяляет страницу из Вашего индекса. Вы сможете найти удаленную страницу по содержанию используя команду "/findall найти удаленную страницу"',
          ],
        },
      ],
    },
    {
      tag: "aside",
      children: [
        {
          tag: "strong",
          children: ["/mailto"],
        },
      ],
    },
    {
      tag: "p",
      children: [
        {
          tag: "strong",
          children: ["/mailto - Отправить сообщение разработчикам бота."],
        },
      ],
    },
    {
      tag: "p",
      children: [
        {
          tag: "em",
          children: [
            'Пример: /mailto Добрый день. Добавьте, пожалуйста, функцию "подедиться". Спасибо, связаться со мной можно по моему нику @мой_ник.',
          ],
        },
      ],
    },
    {
      tag: "p",
      children: [
        "Если Вам есть что сказать, добавить, похвалить или поругать - воспользуйтесь этой функций.",
      ],
    },
    {
      tag: "aside",
      children: [
        {
          tag: "strong",
          children: ["/start или /help"],
        },
      ],
    },
    {
      tag: "p",
      children: [
        {
          tag: "strong",
          children: ["/start или /help - Показать справочную информацию."],
        },
      ],
    },
    {
      tag: "blockquote",
      children: ["Ждем Ваших отзывов!"],
    },
  ],
  views: 4565,
};

export const bookmark = {
  url: mockArticle.url,
  title: mockArticle.title,
  author_name: mockArticle.author_name,
};
