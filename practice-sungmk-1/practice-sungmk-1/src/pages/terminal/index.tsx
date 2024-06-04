import React from 'react'
import * as Styled from "../../../src/components/layouts/LayoutContainer/style";

function Terminal() {
    return (
        <Styled.Container>
            <section>
                <div>terminal</div>

                단말기ID : <input type="text" name="terminalID"/>
                <button>검색</button>
                <br/>
                <hr/>
                <br/>
            </section>
        </Styled.Container>
    )
}

export default Terminal;