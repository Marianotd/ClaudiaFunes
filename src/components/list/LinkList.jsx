import React from 'react'
import NavLink from '../customLinks/NavLink'
import FooterLink from '../customLinks/FooterLink'

export default function LinkList({ data, isDrawer, isFooter, isExternal }) {
  return (
    <>
      {!isFooter ?
        data.map((link, index) => (
          <NavLink
            key={`${index}-${link.label}`}
            label={link.label}
            path={link.path}
            isDrawer={isDrawer}
          />
        )) : (
          data.map((link, index) => (
            <FooterLink
              key={`${index}-${link.label}`}
              label={link.label}
              path={link.path}
              isExternal={isExternal}
            />
          ))
        )}
    </>
  )
}
