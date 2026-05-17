declare module 'aos' {
  type AOSStatic = {
    init: (options?: any) => void;
    refresh?: () => void;
    refreshHard?: () => void;
    [key: string]: any;
  };
  const AOS: AOSStatic;
  export default AOS;
}
