import { ArrowLeftIcon } from '@monorepo/react/icons';
import { mergeCss } from '../../../shared/utils/styles/mergeCss';
import { SurveyButton } from '../../introduction/firesSurvey/components/SurveyButton';
import { GetStartedHeader } from './GetStartedHeader';

type TProps = {
  className?: string;
};

export function GetStarted(props: TProps) {
  const { className } = props;

  const parentCss = ['flex', 'flex-col', className];

  return (
    <div className={mergeCss(parentCss)}>
      <GetStartedHeader />

      <div className="text-xl md:text-2xl leading-[30px] md:leading-normal mt-8 md:mt-10">
        <div className="font-bold">
          Please tell us a little about your situation so that we can make sure
          your action plan includes all of the relevant resources and financial
          assistance available to you.
        </div>
        <div className="text-xl leading-[30px]">(Takes 3 minutes)</div>
      </div>

      <div className="mt-6 md:mt-20 flex justify-center">
        <SurveyButton
          dark
          className="max-w-[350px] justify-center"
          href="/introduction"
        >
          <span className="mr-4">Get Resources</span>
          <ArrowLeftIcon className="h-5 rotate-180" />
        </SurveyButton>
      </div>
    </div>
  );
}
