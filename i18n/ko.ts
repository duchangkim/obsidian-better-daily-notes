import { LocaleStrings } from './types';

const korean: LocaleStrings = {
  settings: {
    title: 'Better Daily Notes 설정',
    folderStructure: {
      name: '폴더 구조',
      desc: '데일리 노트의 폴더 구조를 선택합니다',
      options: {
        year: '연도만 (YYYY)',
        yearMonth: '연도/월 (YYYY/MM)',
        yearMonthWeek: '연도/월/주 (YYYY/MM/Week-N)',
      },
    },
    folderFormat: {
      title: '폴더 형식 설정',
      desc: '연도, 월, 주 폴더의 이름 형식을 지정할 수 있어요.',
      momentDocsLink: 'Moment.js 포맷 참고',
      year: {
        name: '연도 형식',
        desc: '연도 폴더의 형식 (예: YYYY, YY년도)',
      },
      month: {
        name: '월 형식',
        desc: '월 폴더의 형식 (예: MM, M, MMMM)',
      },
      week: {
        name: '주 형식',
        desc: '주 폴더의 형식 (예: W, WW, Wo)',
      },
    },
  },
};

export default korean;
