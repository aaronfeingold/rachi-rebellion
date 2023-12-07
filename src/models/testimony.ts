
export interface Testimony {
    message: string;
    emoji: React.ForwardRefExoticComponent<
      Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
        title?: string | undefined;
        titleId?: string | undefined;
      } & React.RefAttributes<SVGSVGElement>
    >;
}

export interface TestimonyCardProps {
    testimony: Testimony;
}

export interface TestimonyGridProps {
    testimonies: Testimony[];
}

export interface TestimonyContainerProps extends TestimonyGridProps {}
