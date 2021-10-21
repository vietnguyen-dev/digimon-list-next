import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const CardDiv = styled.div`
    border: 1px solid black;
`

export default function Card({name, level, img}) {
    return (
      <>
        <Link href={`/digimon/${name}`}>
          <CardDiv>
            <img
              src={img}
              // width={400}
              // height={400}
              alt={name}
            />
            <div>
              <h3>{name}</h3>
              <p>{level}</p>
            </div>
          </CardDiv>
        </Link>
      </>
    );
}
