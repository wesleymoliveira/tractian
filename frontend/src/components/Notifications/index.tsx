import React, { useState, useEffect, useMemo } from 'react'
import { MdNotifications } from 'react-icons/md'
import { parseISO, formatDistance } from 'date-fns'
import pt from 'date-fns/locale/pt'
import * as S from './styles'
import { useSession } from 'next-auth/client'
import Heading from 'components/Heading'

export type NotificationProps = {
  _id: string
  content: string
  timeDistance: string
  createdAt?: string
  read: boolean
}
export type NotificationsProps = {
  notifications: NotificationProps[]
}

const Notifications = () => {
  const [session] = useSession()
  const [notifications, setNotifications] = useState<NotificationProps[]>([
    { _id: '', content: '', timeDistance: '', read: false },
  ])
  const [visible, setVisible] = useState(false)

  const hasUnread = useMemo(
    () => !!notifications.find((notification) => notification.read === false),
    [notifications],
  )

  useEffect(() => {
    async function loadNotifications() {
      const response = await fetch(
        `http://localhost:3333/${session?.user?.name}/notifications`,
        {
          method: 'get',
          headers: new Headers({
            Authorization: 'Bearer ' + session?.jwt,
            'Content-Type': 'application/x-www-form-urlencoded',
          }),
        },
      )
      const result = await response.json()

      const data = result.map((notification: NotificationProps) => ({
        ...notification,
        timeDistance: formatDistance(
          parseISO(notification.createdAt!),
          new Date(),
          { addSuffix: true, locale: pt },
        ),
      }))
      setNotifications(data)
    }
    if (session) {
      loadNotifications()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function handleToggleVisible() {
    setVisible(!visible)
  }

  async function handleMarkAsRead(id: string) {
    await fetch(`http://localhost:3333/notifications/${id}`, {
      method: 'put',
      headers: new Headers({
        Authorization: 'Bearer ' + session?.jwt,
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    })

    setNotifications(
      notifications.map((notification) =>
        notification._id === id
          ? {
              ...notification,
              read: true,
            }
          : notification,
      ),
    )
  }
  return (
    <S.Wrapper>
      <S.Badge onClick={handleToggleVisible} hasUnread={hasUnread}>
        <MdNotifications color="#FFF" size={20} />
      </S.Badge>

      <S.NotificationList visible={visible}>
        <S.Scroll>
          {notifications.length > 0 ? (
            notifications.map((notification) => (
              <S.Notification
                key={notification._id}
                unread={!notification.read}
              >
                <p>{notification.content}</p>
                <time>{notification.timeDistance}</time>

                {!notification.read && (
                  <button
                    type="button"
                    onClick={() => handleMarkAsRead(notification._id)}
                  >
                    Marcar como lida
                  </button>
                )}
              </S.Notification>
            ))
          ) : (
            <Heading size="small" color="white">
              Não existem notificações para esta empresa.
            </Heading>
          )}
        </S.Scroll>
      </S.NotificationList>
    </S.Wrapper>
  )
}

export default Notifications
