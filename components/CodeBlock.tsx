import { FC, useEffect, useState } from 'react';
import { saveAs } from 'file-saver';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';

interface Props {
  code: string;
  editable?: boolean;
  onChange?: (value: string) => void;
}

export const CodeBlock: FC<Props> = ({
  code,
  editable = false,
  onChange = () => {},
}) => {
  const [copyText, setCopyText] = useState<string>('Copy');

  const handleDownload = () => {
      const blob = new Blob([code], { type: 'text/plain;charset=utf-8' });
      saveAs(blob, `code.md`);
  };
  
  const handleCoffee = () => {
	  window.open("https://ko-fi.com/audi_guzz");
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCopyText('Copy');
    }, 2000);

    return () => clearTimeout(timeout);
  }, [copyText]);

  return (
    <div className="relative min-h-[400px]">
	<ReactMarkdown
		  className="p-2 text-white-400"
	      children={code}
	      rehypePlugins={[rehypeHighlight, rehypeRaw]}
	/>
	<button
	  className="absolute right-20 bottom-[-4] z-10 rounded p-1 text-sm text-white hover:bg-[#2D2E3A] active:bg-[#2D2E3A]"
	  onClick={() => {
	    navigator.clipboard.writeText(code);
	    setCopyText('Copied!');
	  }}
	>
	  {copyText}
	</button>
	<button
		className="absolute right-0 bottom-[-4] z-10 rounded p-1 text-sm text-white hover:bg-[#2D2E3A] active:bg-[#2D2E3A]"
		onClick={handleDownload}>Download</button>
    </div>
  );
};
