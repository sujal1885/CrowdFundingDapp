import "./Form.css";
import "./page.css";
function FormCampaign() {

  return (
    <>
      <body>
        <div class="form">
          <div class="one">
          </div>
          <div class="form-main">
            <div class="form-form">

              <form action="" method="POST">
                <div class="formbold-form-title">
                  <h2 class="">Make A Campaign</h2>
                </div>

                <div class="formbold-input-flex">
                  <div>
                    <label for="firstname" class="formbold-form-label">
                      First name
                    </label>
                    <input
                      type="text"
                      name="firstname"
                      id="firstname"
                      class="formbold-form-input"
                    />
                  </div>
                  <div>
                    <label for="lastname" class="formbold-form-label"> Last name </label>
                    <input
                      type="text"
                      name="lastname"
                      id="lastname"
                      class="formbold-form-input"
                    />
                  </div>
                </div>

                <div class="formbold-input-flex">
                  <div>
                    <label for="email" class="formbold-form-label"> Email </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      class="formbold-form-input"
                    />
                  </div>
                  <div>
                    <label for="phone" class="formbold-form-label"> Phone number </label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      class="formbold-form-input"
                    />
                  </div>
                </div>

                <div class="formbold-mb-3">
                  <label for="Organization" class="formbold-form-label">
                    Organization Name
                  </label>
                  <input
                    type="text"
                    name="Organization"
                    id="Organization"
                    class="formbold-form-input"
                  />
                </div>

                <div class="formbold-mb-3">
                  <label for="address" class="formbold-form-label">
                    Wallet address
                  </label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    class="formbold-form-input"
                  />
                </div>

                <div class="formbold-input-flex">
                  <div>
                    <label for="money" class="formbold-form-label"> Coins you want to Donate </label>
                    <input
                      type="text"
                      name="money"
                      id="money"
                      class="formbold-form-input"
                    />
                  </div>
                  <div>
                    <label for="country" class="formbold-form-label"> Country </label>
                    <input
                      type="text"
                      name="country"
                      id="country"
                      class="formbold-form-input"
                    />
                  </div>
                </div>

                <div class="formbold-checkbox-wrapper">
                  <label for="supportCheckbox" class="formbold-checkbox-label">
                    <div class="formbold-relative">
                      <input
                        type="checkbox"
                        id="supportCheckbox"
                        class="formbold-input-checkbox"
                      />
                      <div class="formbold-checkbox-inner">
                        <span class="formbold-opacity-0">
                          <svg
                            width="11"
                            height="8"
                            viewBox="0 0 11 8"
                            fill="none"
                            class="formbold-stroke-current"
                          >
                            <path
                              d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                              stroke-width="0.4"
                            ></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                    I agree to the defined
                    <a href="#"> terms, conditions, and policies</a>
                  </label>
                </div>

                <button class="formbold-btn">Create A Campaign</button>
              </form>
            </div>
          </div>
        </div>
      </body>
    </>
  )

}
export default FormCampaign