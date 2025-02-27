"use client";

import React, { useState } from "react";
import styles from "./agree.module.css";
import BackHeader from "@/app/components/backHeader/BackHeader";
import AgreeBar from "../components/agreeBar/AgreeBar";
import { redirect } from "next/navigation";

const Page = () => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const handleCheckboxChange = (index: number, isChecked: boolean) => {
    if (index === 1) {
      setIsChecked1(isChecked);
    } else {
      setIsChecked2(isChecked);
    }
  };

  const isButtonDisabled = !(isChecked1 && isChecked2);
  return (
    <div className={styles.body}>
      <div className="ml-5">
        <BackHeader />
      </div>
      <div className={styles.content}>
        <div className={styles.textBar}>
          <p className="pt-16">당신의 한 줄이</p>
          <p className="pb-4">누군가의 영감으로</p>
          <span>끄적끄적</span>
        </div>
        <img className="pb-24" src="/agree.svg" alt="agree" />
        <div className={styles.agreeBox}>
          <AgreeBar
            title="서비스 운영약관 동의(필수)"
            onChange={(isChecked) => handleCheckboxChange(1, isChecked)}
          />
          <AgreeBar
            title="개인정보 수집 및 이용동의(필수)"
            onChange={(isChecked) => handleCheckboxChange(2, isChecked)}
          />
        </div>

        <button
          className={`${styles.submitButton} ${
            isButtonDisabled ? "" : styles.able
          }`}
          disabled={isButtonDisabled}
          onClick={() => {
            redirect("/login/input");
          }}
        >
          동의하고 계속하기
        </button>
      </div>
    </div>
  );
};

export default Page;
