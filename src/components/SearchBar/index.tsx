import React, { useEffect, useReducer, useState, useRef, useLayoutEffect } from 'react';
import styles from './SearchBar.module.scss';

export default function SearchBar({ setKeyword, setPage }: SearchBarProps) {
  const [currentValue, setCurrentValue] = useState('');
  const [isFocused, toggleIsFocused] = useReducer((prev) => !prev, true);
  const inputRef = useRef<HTMLInputElement>(null);

  useLayoutEffect(() => {
    inputRef.current?.focus();
    return () => {
      inputRef.current?.blur();
    };
  });

  const submitValue = () => {
    setKeyword(currentValue);
    setPage(1);
  };

  const handleChangeInput = (event: React.FormEvent<HTMLInputElement>) => {
    setCurrentValue(event.currentTarget.value);
  };

  const handleClickSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    submitValue();
  };

  const handleEnterKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (isFocused && event.key === 'Enter') {
      submitValue();
    }
  };

  return (
    <form role="search" className={styles.wrapper}>
      <input
        type="search"
        aria-label="Input keyword to search"
        className={styles.keywordInput}
        placeholder="검색어를 입력하고 Enter나 '찾기'를 누르세요"
        value={currentValue}
        onChange={handleChangeInput}
        onKeyUp={handleEnterKeyUp}
        ref={inputRef}
      />
      <button type="submit" className={styles.submitButton} onClick={handleClickSubmit}>
        찾기
      </button>
    </form>
  );
}

interface SearchBarProps {
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}
