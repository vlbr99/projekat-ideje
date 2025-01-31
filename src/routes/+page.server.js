import mongoose from "mongoose";
import { fail, redirect } from "@sveltejs/kit";
import Idea from "$lib/models/Idea";
import "$lib/db";
const supported_languages = [
  "Neodređeno",
  "ada",
  "apl",
  "assembly",
  "bash",
  "c",
  "clojure",
  "csharp",
  "cplusplus",
  "cobol",
  "crystal",
  "dart",
  "delphi",
  "elixir",
  "erlang",
  "fsharp",
  "fortran",
  "go",
  "groovy",
  "haskell",
  "java",
  "javascript",
  "julia",
  "kotlin",
  "labview",
  "lisp",
  "lua",
  "matlab",
  "ml",
  "objectivec",
  "pascal",
  "perl",
  "php",
  "prolog",
  "python",
  "r",
  "ruby",
  "rust",
  "scala",
  "scheme",
  "smalltalk",
  "solidity",
  "swift",
  "typescript",
  "vhdl",
  "visualbasic",
];
const regex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/.*)?$/;
const difficulties = ["Lako", "Srednje", "Teško"];

export const actions = {
  post_idea: async ({ request }) => {
    const data = await request.formData();
    const title = data.get("title");
    const description = data.get("description");
    const url = data.get("url");
    const language = data.get("pl");
    const difficulty = data.get("diff");

    if (!title) {
      return fail(400, { message: "Naslov je obavezan" });
    }
    if (title.length < 3) {
      return fail(400, { message: "Naslov mora biti barem 3 karaktera" });
    }
    if (title.length > 40) {
      return fail(400, { message: "Naslov mora biti ispod 40 karaktera" });
    }

    if (!description || description.length < 10) {
      return fail(400, { message: "Opis mora biti barem 10 karaktera" });
    }

    if (url && !regex.test(url)) {
      return fail(400, { message: "Unesi validan URL" });
    }

    if (!supported_languages.includes(language)) {
      return fail(400, { message: "Unesi validan jezik" });
    }

    if (!difficulties.includes(difficulty)) {
      return fail(400, { message: "Unesi validnu težinu" });
    }

    try {
      const new_idea = new Idea({
        title,
        description,
        url,
        language: language || "Neodređeno",
        difficulty: difficulty || "Neodređeno",
      });
      await new_idea.save();
      console.log("Ideja je sačuvana:", new_idea);
      return { success: true, message: "Ideja uspešno dodata!" };
    } catch (error) {
      console.error("Greška prilikom čuvanja ideje:", error);
      return fail(500, { message: "Greška na serveru prilikom čuvanja ideje" });
    }
  },
};

export const load = async () => {
  try {
    const ideas = await Idea.find({}).lean();
    console.log(ideas);
    return {
      post: ideas.map((idea) => ({
        title: idea.title,
        description: idea.description,
        url: idea.url,
        language: idea.language,
        difficulty: idea.difficulty,
      })),
    };
  } catch (error) {
    console.error("Greška pri učitavanju ideja:", error);
    return { ideas: [] };
  }
};
