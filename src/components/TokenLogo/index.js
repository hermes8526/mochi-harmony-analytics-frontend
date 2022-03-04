import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { isAddress } from '../../utils/index.js'
import PlaceHolder from '../../assets/placeholder.png'
import EthereumLogo from '../../assets/eth.png'

const BAD_IMAGES = {}

const Inline = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
`

const Image = styled.img`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  background-color: white;
  border-radius: 50%;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);
`

const StyledEthereumLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    width: ${({ size }) => size};
    height: ${({ size }) => size};
  }
`

export default function TokenLogo({ address, header = false, size = '24px', ...rest }) {
  const [error, setError] = useState(false)

  useEffect(() => {
    setError(false)
  }, [address])

  if (error || BAD_IMAGES[address]) {
    return (
      <Inline>
        <Image {...rest} alt={''} src={PlaceHolder} size={size} />
      </Inline>
    )
  }

  // hard coded fixes for trust wallet api issues
  // onemoon
  if (address?.toLowerCase() === '0xcb35e4945c7f463c5ccbe3bf9f0389ab9321248f') {
    return (
      <StyledEthereumLogo size={size} {...rest}>
        <img
          src='https://i.ibb.co/GVXPwZ5/onemoon.png'
          style={{
            boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.075)',
            borderRadius: '24px',
          }}
          alt=""
        />
      </StyledEthereumLogo>
    )
  }

  // btc
  if (address?.toLowerCase() === '0x3095c7557bcb296ccc6e363de01b760ba031f2d9') {
    return (
      <StyledEthereumLogo size={size} {...rest}>
        <img
          src='https://www.bscscan.com/token/images/btcb_32.png'
          style={{
            boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.075)',
            borderRadius: '24px',
          }}
          alt=""
        />
      </StyledEthereumLogo>
    )
  }

  if (address?.toLowerCase() === '0x6983d1e6def3690c4d616b13597a09e6193ea013') {
    return (
      <StyledEthereumLogo size={size} {...rest}>
        <img
          src='https://www.bscscan.com/token/images/ethereum_32.png'
          style={{
            boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.075)',
            borderRadius: '24px',
          }}
          alt=""
        />
      </StyledEthereumLogo>
    )
  }

  if (address?.toLowerCase() === '0xf155e1a57db0ca820ae37ab4050e0e4c7cfcecd0') {
    return (
      <StyledEthereumLogo size={size} {...rest}>
        <img
          src='https://www.bscscan.com/token/images/dogecoin_32.png'
          style={{
            boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.075)',
            borderRadius: '24px',
          }}
          alt=""
        />
      </StyledEthereumLogo>
    )
  }

  // usdc
  if (address?.toLowerCase() === '0x985458e523db3d53125813ed68c274899e9dfab4') {
    return (
      <StyledEthereumLogo size={size} {...rest}>
        <img
          src='https://www.bscscan.com/token/images/centre-usdc_28.png'
          style={{
            boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.075)',
            borderRadius: '24px',
          }}
          alt=""
        />
      </StyledEthereumLogo>
    )
  }

  // dogecoin
  if (address?.toLowerCase() === '0xF155E1a57DB0Ca820aE37Ab4050e0e4C7cFcEcd0') {
    return (
      <StyledEthereumLogo size={size} {...rest}>
        <img
          src='https://bscscan.com/token/images/dogecoin_32.png'
          style={{
            boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.075)',
            borderRadius: '24px',
          }}
          alt=""
        />
      </StyledEthereumLogo>
    )
  }

  // USDT
  if (address?.toLowerCase() === '0x3c2b8be99c50593081eaa2a724f0b8285f5aba8f') {
    return (
      <StyledEthereumLogo size={size} {...rest}>
        <img
          src='https://harmony.mochiswap.io/images/farms/usdc-usdt.png'
          style={{
            boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.075)',
            borderRadius: '24px',
          }}
          alt=""
        />
      </StyledEthereumLogo>
    )
  }

  // BNB
  if (address?.toLowerCase() === '0xb1f6e61e1e113625593a22fa6aa94f8052bc39e0') {
    return (
      <StyledEthereumLogo size={size} {...rest}>
        <img
          src='https://harmony.mochiswap.io/images/farms/bnb-bmochi.png'
          style={{
            boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.075)',
            borderRadius: '24px',
          }}
          alt=""
        />
      </StyledEthereumLogo>
    )
  }

  //apesox
  if (address?.toLowerCase() === '0x53051d5545745f600232a885a65479ca832198fb') {
    return (
      <StyledEthereumLogo size={size} {...rest}>
        <img
          src='https://i.ibb.co/nnsDdYP/ape.png'
          style={{
            boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.075)',
            borderRadius: '24px',
          }}
          alt=""
        />
      </StyledEthereumLogo>
    )
  }

  // mochi
  if (address?.toLowerCase() === '0x0dd740db89b9fda3baadf7396ddad702b6e8d6f5') {
    return (
      <StyledEthereumLogo size={size} {...rest}>
        <img
          src='https://i.ibb.co/Qb6K6SR/favicon.png'
          style={{
            boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.075)',
            borderRadius: '24px',
          }}
          alt=""
        />
      </StyledEthereumLogo>
    )
  }

  // bmochi
  if (address?.toLowerCase() === '0xda73f5c25c0d644afd20da5535558956b192b262') {
    return (
      <StyledEthereumLogo size={size} {...rest}>
        <img
          src='https://i.ibb.co/jyf0KS1/mochi1.png'
          style={{
            boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.075)',
            borderRadius: '24px',
          }}
          alt=""
        />
      </StyledEthereumLogo>
    )
  }

  // USDC
  if (address?.toLowerCase() === '0x985458E523dB3d53125813eD68c274899e9DfAb4') {
    return (
      <StyledEthereumLogo size={size} {...rest}>
        <img
          src='https://harmony.mochiswap.io/images/farms/1usdc-hmochi.png'
          style={{
            boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.075)',
            borderRadius: '24px',
          }}
          alt=""
        />
      </StyledEthereumLogo>
    )
  }

  // ETH
  if (address?.toLowerCase() === '0x6983D1E6DEf3690C4d616b13597A09e6193EA013') {
    return (
      <StyledEthereumLogo size={size} {...rest}>
        <img
          src='https://www.bscscan.com/token/images/ethereum_32.png'
          style={{
            boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.075)',
            borderRadius: '24px',
          }}
          alt=""
        />
      </StyledEthereumLogo>
    )
  }

  // sushi
  if (address?.toLowerCase() === '0xbec775cb42abfa4288de81f387a9b1a3c4bc552a') {
    return (
      <StyledEthereumLogo size={size} {...rest}>
        <img
          src='https://i.ibb.co/X8Q0pwv/sushi.png'
          style={{
            boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.075)',
            borderRadius: '24px',
          }}
          alt=""
        />
      </StyledEthereumLogo>
    )
  }

  // BUSD
  if (address?.toLowerCase() === '0x0ab43550a6915f9f67d0c454c2e90385e6497eaa' || address?.toLowerCase() === '0xe176ebe47d621b984a73036b9da5d834411ef734') {
    return (
      <StyledEthereumLogo size={size} {...rest}>
        <img
          src='https://i.ibb.co/xCKFdbq/busd.png'
          style={{
            boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.075)',
            borderRadius: '24px',
          }}
          alt=""
        />
      </StyledEthereumLogo>
    )
  }

  //one
  if (address?.toLowerCase() === '0xcf664087a5bb0237a0bad6742852ec6c8d69a27a') {
    return (
      <StyledEthereumLogo size={size} {...rest}>
        <img
          src='https://i.ibb.co/sCCr4Qg/onetoken.png'
          style={{
            boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.075)',
            borderRadius: '24px',
          }}
          alt=""
        />
      </StyledEthereumLogo>
    )
  }

  // safemoon
  if (address?.toLowerCase() === '0x58c5E26fcc4d1d442396D33b58af31549C64d22F') {
    return (
      <StyledEthereumLogo size={size} {...rest}>
        <img
          src='https://i.ibb.co/2W9cS4Z/safemoon.png'
          style={{
            boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.075)',
            borderRadius: '24px',
          }}
          alt=""
        />
      </StyledEthereumLogo>
    )
  }

  const path = `https://tokens.0x1.finance/images/${isAddress(address)}.png`

  return (
    <Inline>
      <Image
        {...rest}
        alt={''}
        src={path}
        size={size}
        onError={(event) => {
          BAD_IMAGES[address] = true
          setError(true)
          event.preventDefault()
        }}
      />
    </Inline>
  )
}
