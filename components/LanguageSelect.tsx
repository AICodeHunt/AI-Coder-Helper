import type { FC } from 'react';

interface Props {
  language: string;
  onChange: (language: string) => void;
}

export const LanguageSelect: FC<Props> = ({ language, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="flex justify-center items-center">
      <select
        className="flex-1 rounded-md bg-[#1F2937] px-4 py-2 text-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#1F2937]"
        value={language}
        onChange={handleChange}
      >
        {languages
          .sort((a, b) => a.label.localeCompare(b.label))
          .map((language) => (
            <option key={language.value} value={language.value}>
              {language.label}
            </option>
          ))}
      </select>
    </div>
  );
};

export const languages = [
  { value: '-- Select --', label: '-- Select --' },
  { value: 'Automatic detection', label: 'Automatic detection' },
  { value: 'Pascal', label: 'Pascal' },
  { value: 'JavaScript', label: 'JavaScript' },
  { value: 'TypeScript', label: 'TypeScript' },
  { value: 'Python', label: 'Python' },
  { value: 'TSX', label: 'TSX' },
  { value: 'JSX', label: 'JSX' },
  { value: 'Vue', label: 'Vue' },
  { value: 'Go', label: 'Go' },
  { value: 'C', label: 'C' },
  { value: 'C++', label: 'C++' },
  { value: 'Java', label: 'Java' },
  { value: 'C#', label: 'C#' },
  { value: 'Visual Basic .NET', label: 'Visual Basic .NET' },
  { value: 'SQL', label: 'SQL' },
  { value: 'Assembly Language', label: 'Assembly Language' },
  { value: 'PHP', label: 'PHP' },
  { value: 'Ruby', label: 'Ruby' },
  { value: 'Swift', label: 'Swift' },
  { value: 'SwiftUI', label: 'SwiftUI' },
  { value: 'Kotlin', label: 'Kotlin' },
  { value: 'R', label: 'R' },
  { value: 'Objective-C', label: 'Objective-C' },
  { value: 'Perl', label: 'Perl' },
  { value: 'SAS', label: 'SAS' },
  { value: 'Scala', label: 'Scala' },
  { value: 'Dart', label: 'Dart' },
  { value: 'Rust', label: 'Rust' },
  { value: 'Haskell', label: 'Haskell' },
  { value: 'Lua', label: 'Lua' },
  { value: 'Groovy', label: 'Groovy' },
  { value: 'Elixir', label: 'Elixir' },
  { value: 'Clojure', label: 'Clojure' },
  { value: 'Lisp', label: 'Lisp' },
  { value: 'Julia', label: 'Julia' },
  { value: 'Matlab', label: 'Matlab' },
  { value: 'Fortran', label: 'Fortran' },
  { value: 'COBOL', label: 'COBOL' },
  { value: 'Bash', label: 'Bash' },
  { value: 'Shell', label: 'Shell' },
  { value: 'Powershell', label: 'Powershell' },
  { value: 'PL/SQL', label: 'PL/SQL' },
  { value: 'CSS', label: 'CSS' },
  { value: 'Racket', label: 'Racket' },
  { value: 'HTML', label: 'HTML' },
  { value: 'NoSQL', label: 'NoSQL' },
  { value: 'Natural Language', label: 'Natural Language' },
  { value: 'CoffeeScript', label: 'CoffeeScript' },
  { value: 'Morse Code', label: 'Morse Code' },
  { value: 'Hex Code', label: 'Hex Code' },
  { value: 'Binary Code', label: 'Binary Code' },
  { value: 'Decimal Code', label: 'Decimal Code' },
  { value: 'Pseudo Code', label: 'Pseudo Code' },
  { value: 'Android', label: 'Android Code' },
  { value: 'MySQL', label: 'MySQL' },
  { value: 'FlinkSql', label: 'FlinkSql' },
  { value: 'Regular', label: 'Regular expression' },
  { value: 'Arduino', label: 'Arduino' },
  { value: 'Esp 8266', label: 'Esp 8266' },
  { value: 'Esp 32', label: 'Esp 32' },
  { value: 'React', label: 'React' },
  { value: 'HTML JS CSS', label: 'HTML JS CSS' },
  { value: 'Tailwind', label: 'Tailwind' },
  { value: 'Git', label: 'Git' },
  { value: 'SVN', label: 'SVN' },
  { value: 'Linux', label: 'Linux' },
  { value: 'Spring', label: 'Spring' },
  { value: 'Redis', label: 'Redis' },
  { value: 'SpringBoot', label: 'SpringBoot' },
  { value: 'Next.js', label: 'Next.js' },
  { value: 'MongoDB', label: 'MongoDB' },
  { value: 'PostgreSQL', label: 'PostgreSQL' },
  { value: 'Angular', label: 'Angular' },
  { value: 'Node.js', label: 'Node.js' },
  { value: 'Django', label: 'Django' },
  { value: 'Ruby on Rails', label: 'Ruby on Rails' },
  { value: 'Memcached', label: 'Memcached' },
  { value: 'Ehcache', label: 'Ehcache' },
  { value: 'Kafka', label: 'Kafka' },
  { value: 'RabbitMQ', label: 'RabbitMQ' },
  { value: 'ActiveMQ', label: 'ActiveMQ' },
  { value: 'RocketMQ', label: 'RocketMQ' },
  { value: 'Spring Cloud', label: 'Spring Cloud' },
  { value: 'Google Cloud', label: 'Google Cloud' },
  { value: 'Chrome Extension', label: 'Chrome Extension' },
  { value: 'Docker', label: 'Docker' },
  { value: 'Kubernetes', label: 'Kubernetes' },
  { value: 'Jenkins', label: 'Jenkins' },
  { value: 'Travis CI', label: 'Travis CI' },
  { value: 'GitLab CI', label: 'GitLab CI' },
  { value: 'ELK Stack', label: 'ELK Stack' },
  { value: 'Splunk', label: 'Splunk' },
  { value: 'Spring Security', label: 'Spring Security' },
  { value: 'Shiro', label: 'Shiro' },
  { value: 'Selenium', label: 'Selenium' },
  { value: 'JWT', label: 'JWT' },
  { value: 'Three.js', label: 'Three.js' },
  { value: 'ALL Program', label: 'ALL Program' },
];
