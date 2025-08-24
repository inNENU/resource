import { getJSONWordCount } from "innenu-generator";

export const replaceWordCount = <T = unknown>(content: T): T => {
  const apartmentWords = getJSONWordCount("./.resource/apartment");
  const functionWords = getJSONWordCount("./.resource/function");
  const guideWords = getJSONWordCount("./.resource/guide");
  const introWords = getJSONWordCount("./.resource/intro");
  const otherWords = getJSONWordCount("./.resource/other");
  const newcomerWords = getJSONWordCount("./.resource/newcomer");
  const schoolWords = getJSONWordCount("./.resource/school");
  const allWords =
    apartmentWords +
    functionWords +
    guideWords +
    introWords +
    otherWords +
    newcomerWords +
    schoolWords;

  const wordsDetail = `现有字数为 ${allWords} 字，其中东师指南部分 ${guideWords} 字，新生迎新部分 ${newcomerWords} 字，东师介绍部分 ${introWords} 字，机构介绍部分 ${apartmentWords} 字，学院介绍部分 ${schoolWords} 字，功能大厅部分 ${functionWords} 字，其他部分 ${otherWords} 字`;

  return JSON.parse(
    JSON.stringify(content)
      .replace("$word-total", Math.round(allWords / 10000).toString())
      .replace("$word-detail", wordsDetail),
  ) as T;
};
