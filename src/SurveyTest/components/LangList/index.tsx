import React, { useState } from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';

interface LangListProps {
  list: string[];
}

const LangList: React.FC<LangListProps> = ({ list }) => {
  const [listItem, setListItem] = useState<string>(list[0]);
  const [isOpened, setIsOpened] = useState(false);

  const listItemHandler = (lang: string) => {
    setListItem(lang);
    setIsOpened(!isOpened);
  };
  return (
    <div
      className={classnames(
        styles.headerLang,
        isOpened && styles.headerLang_opened
      )}
      onClick={() => setIsOpened(!isOpened)}
    >
      <ul className={styles.headerLang__list}>
        <li
          className={classnames(
            styles.langList__item,
            isOpened && styles.langList__item_active
          )}
        >
          {listItem}
        </li>
        {isOpened &&
          list
            .filter((lang) => lang !== listItem)
            .map((lang, index) => (
              <li
                className={styles.langList__item}
                key={index}
                onClick={() => listItemHandler(lang)}
              >
                {lang}
              </li>
            ))}
      </ul>
      <div
        className={classnames(
          styles.headerLang__dropdown,
          isOpened && styles.headerLang__dropdown_opened
        )}
        onClick={() => setIsOpened(!isOpened)}
      ></div>
    </div>
  );
};

export default LangList;
