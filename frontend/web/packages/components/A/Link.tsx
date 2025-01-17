import { Link as L, LinkProps } from 'react-router-dom';
import { commoncss } from 'packages/style';
import styled, { css } from 'styled-components';
import { useScroll } from 'packages/app/contexts/ScrollContext';

const LBase = css`
  text-decoration: none;
  user-select: none;
  :hover {
    cursor: pointer;
  }
  transition: color 0.225s;
`;

const L2 = styled(L)`
  ${LBase}
  ${commoncss.focus}
`;

const L2Wrapper = ({
  onClick,
  onKeyPress,
  ...rest
}: Omit<LinkProps & React.RefAttributes<HTMLAnchorElement>, 'ref'>): JSX.Element => {
  const { pageRef } = useScroll();

  const scrollPageToTop = (): void => {
    if (pageRef && pageRef.current) {
      pageRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const onClickHandler: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    onClick?.(e);
    scrollPageToTop();
  };
  const onKeyPressHandler: React.KeyboardEventHandler<HTMLAnchorElement> = (e) => {
    onKeyPress?.(e);
    if (e.key === 'Enter') {
      scrollPageToTop();
    }
  };

  return <L2 onClick={onClickHandler} onKeyPress={onKeyPressHandler} {...rest} />;
};

const StyledLinkCSS = css`
  ${LBase}
  color: ${({ theme }) => theme.color.base[400]};
  ${commoncss.focus}
  &:hover {
    color: ${({ theme }) => theme.color.base[300]};
    text-decoration: underline;
  }
  && svg {
    font-size: inherit;
  }
`;

const StyledLinkBase = styled(L)`
  ${StyledLinkCSS}
`;

const StyledLinkWrapper = ({
  onClick,
  onKeyPress,
  ...rest
}: Omit<LinkProps & React.RefAttributes<HTMLAnchorElement>, 'ref'>): JSX.Element => {
  const { pageRef } = useScroll();

  const scrollPageToTop = (): void => {
    if (pageRef && pageRef.current) {
      pageRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const onClickHandler: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    onClick?.(e);
    scrollPageToTop();
  };
  const onKeyPressHandler: React.KeyboardEventHandler<HTMLAnchorElement> = (e) => {
    onKeyPress?.(e);
    if (e.key === 'Enter') {
      scrollPageToTop();
    }
  };

  return <StyledLinkBase onClick={onClickHandler} onKeyPress={onKeyPressHandler} {...rest} />;
};

export const StyledLink = Object.assign(StyledLinkWrapper, {
  css: StyledLinkCSS,
});

export const Link = Object.assign(L2Wrapper, {
  Styled: StyledLink,
});

export default Link;
