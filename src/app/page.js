"use client";

import { quotes } from "@/quotes";
import { useState, useEffect } from "react";
import { getRandomNumber, incrementStateIndex } from "@/utils";
import { Card } from "@/components/Card";
import { Title } from "@/components/Title";
import { Body2 } from "@/components/Body2";
import { Button } from "@/components/Button";

export default function Home() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [likeCounts, setLikeCounts] = useState(() => {
    if (typeof window !== "undefined") {
      const savedLikes = localStorage.getItem("my-quotes-likes");
      return savedLikes ? JSON.parse(savedLikes) : quotes.map((q) => q.likedBy);
    }
    return quotes.map((q) => q.likedBy);
  });

  useEffect(() => {
    localStorage.setItem("my-quotes-likes", JSON.stringify(likeCounts));
  }, [likeCounts]);

  function handleNextQuote() {
    if (quotes.length <= 1) return;
    const nextIndex = getRandomNumber(0, quotes.length - 1);

    if (nextIndex === currentQuoteIndex) {
      handleNextQuote();
    } else {
      setCurrentQuoteIndex(nextIndex);
    }
  }

  return (
    //JSX
    <main className="min-h-dvh flex items-center  justify-center">
      <Card>
        <Title>{quotes[currentQuoteIndex].quote}</Title>
        <Body2 align="right" style="italic" element="span">
          by {quotes[currentQuoteIndex].author}
        </Body2>
        <div className="self-end flex inline-block gap-2">
          <div className="self-end flex inline-block gap-2 mr-2">
            <Button
              onClick={() =>
                incrementStateIndex(setLikeCounts, currentQuoteIndex)
              }
            >
              Like ❤️ {likeCounts[currentQuoteIndex]}
            </Button>
          </div>
          <Button onClick={handleNextQuote}>Next Quote</Button>
        </div>
      </Card>
    </main>
  );
}
