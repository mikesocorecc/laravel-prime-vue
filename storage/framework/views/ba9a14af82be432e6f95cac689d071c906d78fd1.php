<?php
    echo "<?php".PHP_EOL;
?>

namespace <?php echo e($namespacesTests); ?>;

trait ApiTestTrait
{
    private $response;
    public function assertApiResponse(Array $actualData)
    {
        $this->assertApiSuccess();

        $response = json_decode($this->response->getContent(), true);
        $responseData = $response['data'];

        $this->assertNotEmpty($responseData['id']);
        $this->assertModelData($actualData, $responseData);
    }

    public function assertApiSuccess()
    {
        $this->response->assertStatus(200);
        $this->response->assertJson(['success' => true]);
    }

    public function assertModelData(Array $actualData, Array $expectedData)
    {
        foreach ($actualData as $key => $value) {
            if (in_array($key, <?php echo $timestamps; ?>)) {
                continue;
            }
            $this->assertEquals($actualData[$key], $expectedData[$key]);
        }
    }
}
<?php /**PATH C:\laragon\www\laravel-prime-vue\resources\views/vendor/laravel-generator/api/test/api_test_trait.blade.php ENDPATH**/ ?>