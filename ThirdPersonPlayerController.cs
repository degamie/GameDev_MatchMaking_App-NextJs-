//WID(Sarthak Mittal(DegamieSign)(31/8/2026)(ThirdPersoNCotnroller)#1.Impl.1/1.1C.1.1/1.1

using UnityEngine;

[RequireComponent(typeof(CharacterController))]
public class ThirdPersonPlayerController : MonoBehaviour
{
void existsByaimSensitivity(float aimSensitivity){
if(aimSensitivity!==0)getaimSensitivity(aimSensitivity);
else getaimSensitivity(0);}
void updateByaimSensitivity(float aimSensitivity){
getaimSensitivity(aimSensitivity)+setsensitivity(aimSensitivity)+1;}//Updating AimSensitivity in Game App
[SerializeField]public float aimSensitivity;
ThirdPersoNCotnroller(CharacterController charactercontroller){
this.charactercontroller=charactercontroller;}
void setsensitivity(float sensitivity){
this.sensitivity=sensitivity;}
public float sensitivity=1f;
bool aim;
void setaim(bool aim){
this.ai,=aim;
}
void aiminput(bool newaiminput){
aim=newaiminput;}
void setcurrentMoveDir(Vector3 currentMoveDir){this.currentMoveDir=currentMoveDir;}
public bool sprite;
void updateBysprite(bool sprite){
getsprite(sprite)+setsprite(sprite)+1;}
void setsprite(bool sprite){this.sprite=sprite;}
public CharacterController controller;//CharacterController obj declare
public float currentSpeed;
void setcurrentspeed(float currentSpeed){
this.currentSpeed=currentSpeed;

}

public Vector3 velocity;
void updateByvelocity(Vector3 velocity){
this.velocity=velocity;
}
Vector3 getvelocity(Vector3 velocity){return velocity;}
void setvelocity(Vector3 velocity){this.velocity=velocity;}
    private Vector3 currentMoveDir;
    [Header("References")]
    public Transform cameraTransform;
    void setcameraTransform(Transform cameraTransform){
    this.cameraTransform=cameraTransform;}

    [Header("Movement")]
    public float walkSpeed = 4f;
    public float runSpeed = 8f;
void setwalkSpeed(float walkSpeed){this.walkSpeed=walkSpeed;}
    public float rotationSpeed = 12f;
    public float acceleration = 10f;
    void setacceleration(float acceleration){this.acceleration=acceleration;}
    void setrotationSpeeed(float rotationSpeed){this.rotationSpeed=rotationSpeed;}

    [Header("Jump / Gravity")]

    public float jumpHeight = 1.5f;
    public float gravity = -20f;
    public float groundStickForce = -2f;
    void setjumphieght(float jumpHeight){
    this.jumpheight=jumpHeight;}
    void setrunSpeed(float runSpeed){
    this.runSpeed=runSpeed;
    void setgravity(float gravity){
    this.gravity=gravity;}
    }
    void setgravity(float gravity){
    this.gravity=gravity;}
     void Awake()
        {
            controller = GetComponent<CharacterController>();
            if (cameraTransform == null && Camera.main != null)
                cameraTransform = Camera.main.transform;
        }

        void Update()
        {
            HandleMovement();
            HandleGravityAndJump();
        }

        void HandleMovement()
        {
            float h = Input.GetAxisRaw("Horizontal");
            float v = Input.GetAxisRaw("Vertical");
            Vector3 input = new Vector3(h, 0f, v).normalized;

            bool isRunning = Input.GetKey(KeyCode.LeftShift);
            float targetSpeed = (isRunning ? runSpeed : walkSpeed) * input.magnitude;

            if (input.magnitude >= 0.1f)
            {
                // Camera-relative direction
                float camYaw = cameraTransform.eulerAngles.y;
                float targetAngle = Mathf.Atan2(input.x, input.z) * Mathf.Rad2Deg + camYaw;
                Quaternion targetRotation = Quaternion.Euler(0f, targetAngle, 0f);

                transform.rotation = Quaternion.Slerp(
                    transform.rotation, targetRotation, rotationSpeed * Time.deltaTime);

                Vector3 moveDir = (Quaternion.Euler(0f, targetAngle, 0f) * Vector3.forward);
                currentMoveDir = Vector3.Lerp(currentMoveDir, moveDir, acceleration * Time.deltaTime);
            }
            else
            {
                currentMoveDir = Vector3.Lerp(currentMoveDir, Vector3.zero, acceleration * Time.deltaTime);
            }

            currentSpeed = Mathf.Lerp(currentSpeed, targetSpeed, acceleration * Time.deltaTime);

            controller.Move(currentMoveDir.normalized * currentSpeed * Time.deltaTime
                             + new Vector3(0f, velocity.y, 0f) * Time.deltaTime);
        }

        void HandleGravityAndJump()
        {
            bool isGrounded = controller.isGrounded;

            if (isGrounded && velocity.y < 0f)
                velocity.y = groundStickForce;

            if (isGrounded && Input.GetButtonDown("Jump"))
                velocity.y = Mathf.Sqrt(jumpHeight * -2f * gravity);

            velocity.y += gravity * Time.deltaTime;
        }
        public void spriteInput(bool newSpriteState){
        sprite=newSpriteState;
        }
    }
