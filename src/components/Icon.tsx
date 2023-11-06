import cx from 'classix';
import {JSX,mergeProps} from 'solid-js';

const variantClassNames={
  primary400: 'bg-zinc-400',
};

const iconVariantClassNames: Record<keyof typeof variantClassNames,string>={
  primary400: 'text-white',
};

const iconTransparentVariantClassNames: Record<keyof typeof variantClassNames,string>={
  primary400: 'text-zinc-400',
};

export const IconVariantClasses=Object.keys(variantClassNames) as (keyof typeof variantClassNames)[];

const sizeClassNames=(isEM: boolean) => ({
  xxs: `w-4 h-4 rounded-md ${isEM&&'em:!w-4 em:!h-4'}`,
});

type ReturnTypeSize=keyof ReturnType<typeof sizeClassNames>;

const iconSizeClassNames=(isEM: boolean) =>
  ({
    xxs: `text-xs ${isEM&&'!text-075em'}`,
  }) satisfies Record<ReturnTypeSize,string>;

export const IconSizeClasses=Object.keys(sizeClassNames(false)) as ReturnTypeSize[];

export const Icon=(_props: {
  icon: string;
  variant: keyof typeof variantClassNames;
  size: ReturnTypeSize;
  isRounded?: boolean;
  isEM?: boolean;
  isTransparent?: boolean;
  onClick?: JSX.EventHandler<unknown,MouseEvent>;
}) => {
  const props=mergeProps(
    {
      variant: 'primary' as const,
      size: 'default' as const,
      icon: '',
      isEM: false,
      isTransparent: false,
    },
    _props,
  );

  return (
    <div
      class={cx(
        'flex items-center justify-center',
        !props.isTransparent&&variantClassNames[props.variant as keyof typeof variantClassNames],
        sizeClassNames(props.isEM)[props.size as ReturnTypeSize],
        props.isRounded&&'!rounded-full',
        props.onClick&&'cursor-pointer',
      )}
      onClick={(e) => props.onClick&&props.onClick(e)}
    >
      <i
        class={cx(
          'ri-fw block align-middle',
          props.icon,
          props.isTransparent
            ? iconTransparentVariantClassNames[props.variant as keyof typeof variantClassNames]
            :iconVariantClassNames[props.variant as keyof typeof variantClassNames],
          iconSizeClassNames(props.isEM)[props.size as keyof typeof sizeClassNames],
        )}
      />
    </div>
  );
};
