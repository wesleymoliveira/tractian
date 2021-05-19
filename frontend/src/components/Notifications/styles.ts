import styled, { css } from 'styled-components'

import PerfectScrollbar from 'react-perfect-scrollbar'

import { lighten } from 'polished'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  position: relative;
`
type BadgeProps = {
  hasUnread: boolean
}

type NotificationListProps = {
  visible: boolean
}

type NotificationProps = {
  unread: boolean
}

export const Badge = styled.button<BadgeProps>`
  background: none;
  border: 0;
  position: relative;

  ${(props) =>
    props.hasUnread &&
    css`
      &::after {
        position: absolute;
        right: 0;
        top: 0;
        width: 8px;
        height: 8px;
        background: #ff892e;
        content: '';
        border-radius: 50%;
      }
    `}
`

export const NotificationList = styled.div<NotificationListProps>`
  ${media.lessThan('medium')`
      left: -230px;
    `}
  position: absolute;
  width: 260px;
  left: -120px;
  top: calc(100% + 30px);
  background: rgba(0, 0, 0, 0.8);
  border-radius: 3px;
  padding: 15px 5px;
  display: ${(props) => (props.visible ? 'block' : 'none')};

  &::before {
    ${media.lessThan('medium')`
      left: calc(220px);
    `}
    content: '';
    position: absolute;
    left: calc(110px);
    top: -20px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid rgba(0, 0, 0, 0.8);
  }
`

export const Scroll = styled(PerfectScrollbar)`
  max-height: 260px;
  padding: 5px 15px;
`
export const notificationModifiers = {
  unread: () => css`
    &::after {
      content: '';
      display: inline-block;
      width: 8px;
      height: 8px;
      background: #ff892e;
      border-radius: 50%;
    }
  `,
}
export const Notification = styled.div<NotificationProps>`
  ${({ theme, unread }) => css`
    color: #fff;

    & + div {
      margin-top: 15px;
      padding-top: 15px;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }

    p {
      font-size: 13px;
      line-height: 18px;
    }

    time {
      font-size: 12px;
      opacity: 0.6;
    }

    button {
      font-size: 12px;
      border: 0;
      background: none;
      color: ${lighten(0.2, `${theme.colors.primary}`)};
      padding: 0 5px;
      margin: 0 5px;
      border-left: 1px solid rgba(255, 255, 255, 0.1);
    }
    ${unread && notificationModifiers.unread()};
  `}
`
