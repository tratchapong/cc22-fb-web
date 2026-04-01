import React from 'react'

function Profile() {
  return (
        <div className='min-h-screen w-full bg-info p-4 '>
          <button className="btn btn-secondary"
            onClick={() => document.getElementById('modal2').showModal()}
          > Open Modal</button>
          <dialog id="modal2" className="modal">
            <div className="modal-box">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
              </form>
              <>
                <div className="text-3xl">Hello</div>
              </>
            </div>
          </dialog>
        </div>
  )
}

export default Profile