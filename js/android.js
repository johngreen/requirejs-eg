/*

Non-Commercial Software License Agreement

This license agreement ("License"), effective today, is made by and between you (hereinafter referred to as the "Licensee") and John C Green, for research purposes and includes executable code, source code, and documentation (hereinafter referred to as the "Software").

    General. A non-exclusive, nontransferable, perpetual license is granted to the Licensee to install and use the Software for academic, non-profit, or government-sponsored research purposes. Use of the Software under this License is restricted to non-commercial purposes. Commercial use of the Software requires a separately executed written license agreement.

    Permitted Use and Restrictions. Licensee agrees that it will use the Software, and any modifications, improvements, or derivatives to the Software that the Licensee may create (collectively, "Improvements") solely for internal, non-commercial purposes and shall not distribute or transfer the Software or Improvements to any person or third parties without prior written permission from John C Green. The term "non-commercial," as used in this License, means academic or other scholarly research which (a) is not undertaken for profit, or (b) is not intended to produce works, services, or data for commercial use, or (c) is neither conducted, nor funded, by a person or an entity engaged in the commercial use, application or exploitation of works similar to the Software.

    Ownership and Assignment of Copyright. The Licensee acknowledges that John C Green hold copyright in the Software and associated documentation, and the Software and associated documentation are the property of John C Green. The Licensee agrees that any Improvements made by Licensee shall be subject to the same terms and conditions as the Software. Licensee agrees not to assert a claim of infringement in Licensee copyrights in Improvements in the event John C Green prepares substantially similar modifications or derivative works. The Licensee agrees to use his/her reasonable best efforts to protect the contents of the Software and to prevent unauthorized disclosure by its agents, officers, employees, and consultants. If the Licensee receives a request to furnish all or any portion of the Software to a third party, Licensee will not fulfill such a request but will refer the third party to millenniumtoday@gmail.com so that the third party's use of this Software will be subject to the terms and conditions of this License. Notwithstanding the above, Licensee may disclose any Improvements that do not involve disclosure of the Software.

    Copies. The Licensee may make a reasonable number of copies of the Software for the purposes of backup, maintenance of the Software or the development of derivative works based on the Software. These additional copies shall carry the copyright notice and shall be controlled by this License, and will be destroyed along with the original by the Licensee upon termination of the License.
    Acknowledgement. Licensee agrees that any publication of results obtained with the Software will acknowledge its use by an appropriate citation as specified in the documentation.

    Disclaimer of Warranties and Limitation of Liability. THE LICENSEE AGREES THAT ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. JOHN C GREEN MAKES NO REPRESENTATION OR WARRANTY THAT THE SOFTWARE WILL NOT INFRINGE ANY PATENT OR OTHER PROPRIETARY RIGHT. IN NO EVENT SHALL JOHN C GREEN BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

    Termination. This License is effective until terminated by either party. Your rights under this License will terminate automatically without notice from John C Green if you fail to comply with any term(s) of this License. You may terminate the license by giving written notice of termination to John C Green. Upon termination of this License, you shall immediately discontinue all use of the Software and destroy the original and all copies, full or partial, of the Software, including any modifications or derivative works, and associated documentation.

    Governing Law and General Provisions. This License shall be governed by the laws of the State of Illinois, excluding the application of its conflicts of law rules. This License shall not be governed by the United Nations Convention on Contracts for the International Sale of Goods, the application of which is expressly excluded. If any provisions of this License are held invalid or unenforceable for any reason, the remaining provisions shall remain in full force and effect. This License is binding upon any heirs and assigns of the Licensee. The License granted to Licensee hereunder may not be assigned or transferred to any other person or entity without the express consent of John C Green. This License constitutes the entire agreement between the parties with respect to the use of the Software licensed hereunder and supersedes all other previous or contemporaneous agreements or understandings between the parties, whether verbal or written, concerning the subject matter. Any translation of this License is done for local requirements and in the event of a dispute between the English and any non-English versions, the English version of this License shall govern.

*/

function Android () {
    this.species = "android";

    this.abilities = {

        breed: false,    
        repair: true,
        employable : false
    }
    this.damaged = true;

    this.repair = function () {
        console.log("I am being fixed");

        this.damaged = false;
    }

    this.currentState = function(){
        var _currentState = this.damaged ? "damaged" : "repaired";
        console.log("I am " + _currentState);

    }

}




