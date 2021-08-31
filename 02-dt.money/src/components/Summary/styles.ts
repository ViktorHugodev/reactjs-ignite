import styled from "styled-components";

export const Container = styled.div`
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap:2rem;
  margin-top: -5.5rem;
  
  div {
    background: var(--shape);
    padding: .5rem 2rem;
    border-radius: .25rem;
    color:var(--text-title);
    
    header {
      display:flex;
      align-items:center;
      justify-content:space-between;
    }
  
    strong {
      display: block;
      font-size:1.8rem;
      font-weight: 500;
      line-height:3rem;
    }
    
  
  }
  .highlight {
      background: var(--green);
      color: var(--shape);
    }
  
`