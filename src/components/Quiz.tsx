"use client";

import quiz from "@/utils/questions.json";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { cloneElement, useState } from "react";
import { X } from "@/icons/X";
import Link from "next/link";
import { Arrow } from "@/icons/Arrow";
import { SmileySad } from "@/icons/SmileySad";
import { Smiley } from "@/icons/Smiley";

type QuizProps = {
  handleClose: () => void;
};

type QuestionOptions = {
  display: string;
  value: string | boolean | number;
  isRejection: boolean;
};

export function Quiz({ handleClose }: QuizProps) {
  const [ref, instance] = useKeenSlider<HTMLDivElement>({
    slides: { perView: 1, origin: "center" },
    drag: false,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  const questions = quiz.questions;

  const [currentSlide, setCurrentSlide] = useState(0);
  const [answers, setAnswers] = useState<Array<QuestionOptions>>([]);

  const hasRejectionAnswer = answers.some((answer) => answer.isRejection);
  const canViewPreviousButton = currentSlide > 0;
  const canViewNextButton =
    currentSlide !==
      (instance?.current?.track?.details?.slides.length || 0) - 1 &&
    !!answers[currentSlide];

  const handleClickAnswer = (index: number, value: QuestionOptions) => {
    instance.current?.next();

    setTimeout(
      () => {
        if (index < answers.length) {
          setAnswers((prev) =>
            prev.map((answer, i) => (i === index ? value : answer))
          );
        } else {
          setAnswers((prevAnswers) => [...prevAnswers, value]);
        }
      },
      currentSlide === questions.length - 1 ? 0 : 500
    );
  };

  return (
    <div className="h-screen flex flex-col items-center">
      <nav className="w-full top-0 p-5 flex justify-between">
        <img
          className="w-10 h-10 pointer-events-none self-center flex-auto"
          src="images/logo.svg"
          alt="Logo"
        />

        <button
          onClick={handleClose}
          className="flex items-center justify-center w-10 h-10 rounded-full text-text/40 hover:text-text/50 transition-colors"
        >
          <X />
        </button>
      </nav>

      <div ref={ref} className="keen-slider flex-1">
        {questions.map((question, questionIdx) => (
          <div
            key={questionIdx}
            className="keen-slider__slide flex flex-col items-center justify-center gap-7"
          >
            <h4 className="text-text w-full text-center">
              {question.question}
            </h4>

            <div className="flex flex-wrap items-center justify-center gap-4">
              {question.options.map((option, i) => (
                <button
                  key={i}
                  data-checked={answers[questionIdx]?.value === option.value}
                  onClick={() => handleClickAnswer(questionIdx, option)}
                  className="rounded w-[154px] h-[154px] data-[checked=true]:bg-text/20 hover:outline hover:outline-text/40 transition-colors border border-text/20"
                  dangerouslySetInnerHTML={{ __html: option.display }}
                />
              ))}
            </div>
          </div>
        ))}

        <div className="relative keen-slider__slide grid grid-cols-1 md:grid-cols-2">
          <div
            data-rejected={hasRejectionAnswer}
            className="relative bg-text/20 hidden md:flex data-[rejected=true]:bg-primary/20 items-center justify-center"
          >
            {cloneElement(hasRejectionAnswer ? <SmileySad /> : <Smiley />, {
              className: "w-[28.125rem] h-[28.125rem] text-[#f3f7f4]",
            })}
          </div>
          <div>
            <h4 className="flex items-center justify-center text-text w-full text-center max-w-[1094px] p-5 h-full">
              {hasRejectionAnswer ? (
                <span>
                  Unfortunately, we are unable to prescribe this medication for
                  you. This is because finasteride can alter the PSA levels,
                  which maybe used to monitor for cancer. You should discuss
                  this further with your GP or specialist if you would still
                  like this medication.
                </span>
              ) : (
                <span>
                  Great news! We have the perfect treatment for your hair loss.
                  Proceed to &nbsp;
                  <Link
                    className="underline underline-offset-2"
                    href="https://www.manual.co"
                    target="_blank"
                  >
                    www.manual.co
                  </Link>
                  , and prepare to say hello to your new hair!
                </span>
              )}
            </h4>
          </div>
        </div>
      </div>

      <footer className="w-full p-5 flex items-center justify-between gap-5">
        {canViewPreviousButton ? (
          <button
            type="button"
            className="heading-7 uppercase border border-text-text text-text-muted px-[1.875rem] py-[0.938rem] hover:bg-text hover:text-background transition-colors rotate-180"
            onClick={() => instance.current?.prev()}
          >
            <Arrow />
          </button>
        ) : (
          <div />
        )}

        {canViewNextButton && (
          <button
            type="button"
            className="heading-7 uppercase border border-text-text text-text-muted px-[1.875rem] py-[0.938rem] hover:bg-text hover:text-background transition-colors"
            onClick={() => instance.current?.next()}
          >
            <Arrow />
          </button>
        )}
      </footer>
    </div>
  );
}
