import { useMemo } from 'react';
import { useMediaQuery } from 'react-responsive';

const MediaQueryEnum = {
  xs: {
    maxWidth: 575,
  },
  sm: {
    minWidth: 576,
    maxWidth: 767,
  },
  md: {
    minWidth: 768,
    maxWidth: 991,
  },
  lg: {
    minWidth: 992,
    maxWidth: 1199,
  },
  xl: {
    minWidth: 1200,
    maxWidth: 1599,
  },
  xxl: {
    minWidth: 1600,
  },
};

const useAntdMediaQuery = () => {
  const isMd = useMediaQuery(MediaQueryEnum.md);
  const isLg = useMediaQuery(MediaQueryEnum.lg);
  const isXxl = useMediaQuery(MediaQueryEnum.xxl);
  const isXl = useMediaQuery(MediaQueryEnum.xl);
  const isSm = useMediaQuery(MediaQueryEnum.sm);
  const isXs = useMediaQuery(MediaQueryEnum.xs);

  const calculateColSpan = () => {
    if (isXxl) {
      return 'xxl';
    }
    if (isXl) {
      return 'xl';
    }
    if (isLg) {
      return 'lg';
    }
    if (isMd) {
      return 'md';
    }
    if (isSm) {
      return 'sm';
    }
    if (isXs) {
      return 'xs';
    }
    return 'md';
  };

  const colSpan: keyof typeof MediaQueryEnum = useMemo(calculateColSpan, [
    isMd,
    isLg,
    isXxl,
    isXl,
    isSm,
    isXs,
  ]);

  return colSpan;
};

export default useAntdMediaQuery;
