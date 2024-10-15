"use client";
import React, { useState, ChangeEvent } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function WordCounter() {
  const [text, setText] = useState<string>("");

  const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const clearText = () => {
    setText("");
  };

  const wordCount = text
    .trim()
    .split(/\s+/)
    .filter((word) => word).length;

  const charCount = text.length;

  return (
    <div
      className="flex flex-col items-center justify-center h-screen gap-6"
      style={{
        backgroundImage: "url('https://i.pinimg.com/736x/0c/ec/78/0cec78f13baf1aa26794912dea0c6f36.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <Card className="w-full max-w-md bg-tranparent bg-opacity-80">
        <CardHeader className="text-center justify-center flex flex-col">
          <CardTitle className="text-white bg-black">Text Analysis</CardTitle>
          <CardDescription className="bg-white text-gray-600">
            Enter text and see the word and character count.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            id="text-input"
            placeholder="Enter your text here..."
            className="h-32 resize-none"
            value={text}
            onChange={handleTextChange}
          />
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground text-gray-600 bg-white">
              <span id="word-count">{wordCount}</span> words,{" "}
              <span id="char-count">{charCount}</span> characters
            </div>
            <Button className="bg-white text-black" onClick={clearText}>Clear</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
